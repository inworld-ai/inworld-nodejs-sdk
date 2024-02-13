import {
  InworldConnectionService,
  ServiceError,
  status,
} from '@inworld/nodejs-sdk';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Message } from 'discord.js';
import { Gauge } from 'prom-client';
import { v4 } from 'uuid';

import { DiscordService } from './discord.service';
import { InworlConnection } from './inworld.connection';

@Injectable()
export class InworldService {
  private maxRetryAttempts: number;
  private readonly connections: {
    [key: string]: {
      connection?: InworldConnectionService;
      retryAttempts: number;
    };
  } = {};
  private readonly logger = new Logger(InworldService.name);

  private sessionExpiredRegExp = new RegExp('Session (.*?) expired or invalid');

  constructor(
    private readonly discordService: DiscordService,
    private readonly configService: ConfigService,
    @InjectMetric('inworld_ai_service_connections_count')
    public readonly connectionGauge: Gauge<string>,
  ) {
    this.maxRetryAttempts = this.configService.get('MAX_RETRY_ATTEMPTS');
  }

  async reply(message: Message) {
    const id = v4();

    if (!this.connections[id]?.connection) {
      this.connections[id] = await this.createConnection(id, message);
    }

    this.connections[id].connection.sendText(
      this.discordService.extractText(message),
    );
  }

  destroy() {
    Object.entries(this.connections).forEach(([id]) =>
      this.destroyConnection(id, true),
    );
  }

  private async createConnection(id: string, message: Message) {
    const { discriminator, displayName } = message.author;

    const previousDialog = await this.discordService.extractPreviousDialog(
      message,
    );
    const threadName = `${displayName} ${discriminator} ${this.discordService
      .extractText(message)
      .substring(0, 20)}`;

    const service = new InworlConnection({
      apiKey: {
        key: this.configService.get('INWORLD_KEY'),
        secret: this.configService.get('INWORLD_SECRET'),
      },
      scene: this.configService.get('INWORLD_SCENE'),
      onError: this.handleError(id, message).bind(this),
      onDisconnect: () => this.destroyConnection(id, true),
      message,
      threadName,
      previousDialog,
    });

    this.connectionGauge.inc();

    return {
      connection: service.getConnection(),
      retryAttempts: 0,
    };
  }

  private destroyConnection(id: string, force: boolean = false) {
    if (this.connections[id]?.connection?.isActive()) {
      this.connections[id].connection.close();
      this.connections[id].connection = undefined;
    }

    if (force || this.connections[id].retryAttempts === this.maxRetryAttempts) {
      delete this.connections[id];
      this.connectionGauge.dec();
    }
  }

  private retrySend(id: string, message: Message) {
    if (this.connections[id]?.retryAttempts < this.maxRetryAttempts) {
      this.connections[id].retryAttempts++;
      this.reply(message);
    }
  }

  private handleError(id: string, message: Message) {
    return (err: ServiceError) => {
      // Skip server and client side close connection events
      if ([status.ABORTED, status.CANCELLED].includes(err.code)) {
        return;
      }

      this.destroyConnection(id);
      this.retrySend(id, message);

      if (!this.sessionExpiredRegExp.test(err.details)) {
        this.logger.error(err);
      }
    };
  }
}
