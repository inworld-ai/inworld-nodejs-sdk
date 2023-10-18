import { InjectDiscordClient, On, Once } from '@discord-nestjs/core';
import { Injectable, Logger, UseGuards } from '@nestjs/common';
import { Client as DiscordClient, Message } from 'discord.js';

import { AuthorGuard } from './guards/author.guard';
import { ChannelGuard } from './guards/channel.guard';
import { InworldService } from './inworld.service';

@Injectable()
export class BotService {
  private readonly logger = new Logger(BotService.name);

  constructor(
    @InjectDiscordClient()
    private readonly discordClient: DiscordClient,
    private readonly inworldService: InworldService,
  ) {}

  // If `/metrics' url was visited it's require some time to stop http process.
  // So if use `onApplicationShutdown` instead of `onModuleDestroy` bot is continue to be online.
  onModuleDestroy() {
    this.discordClient.destroy();
    this.inworldService.destroy();
  }

  @Once('ready')
  onReady() {
    this.logger.log(`Bot ${this.discordClient.user.tag} was started!`);
  }

  @On('messageCreate')
  @UseGuards(AuthorGuard, ChannelGuard)
  async onDirectMessage(message: Message) {
    const actions = [this.inworldService.reply(message)];

    if (message.channel.isThread()) {
      actions.unshift(message.channel.sendTyping());
    }

    await Promise.all(actions);
  }
}
