import { InjectDiscordClient } from '@discord-nestjs/core';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client as DiscordClient, DMChannel, Message } from 'discord.js';

interface DiscordExecutionContext extends ExecutionContext {
  getMessage(): Message;
}

@Injectable()
export class ChannelGuard implements CanActivate {
  private channelsWhitelistEnabled = false;
  private channelsWhitelist: string[];
  private usersWhitelistEnabled = false;
  private usersWhitelist: string[];

  constructor(
    @InjectDiscordClient()
    private readonly discordClient: DiscordClient,
    private configService: ConfigService,
  ) {
    this.channelsWhitelistEnabled =
      !!this.configService.get('CHANNELS_WHITELIST');

    if (this.channelsWhitelistEnabled) {
      this.channelsWhitelist = this.configService
        .get('CHANNELS_WHITELIST')
        .split(',');
    }

    this.usersWhitelistEnabled = !!this.configService.get('USERS_WHITELIST');

    if (this.usersWhitelistEnabled) {
      this.usersWhitelist = this.configService
        .get('USERS_WHITELIST')
        .split(',');
    }
  }

  canActivate(context: DiscordExecutionContext): boolean {
    const message = context.getArgByIndex(0);

    // DM
    if (message.channel instanceof DMChannel) {
      return (
        !this.usersWhitelistEnabled ||
        this.usersWhitelist?.includes(message.author.id)
      );
    }

    // General channel
    const channel = message.channel.isThread()
      ? message.channel.parent
      : message.channel.id;

    if (
      this.channelsWhitelistEnabled &&
      !this.channelsWhitelist?.includes(channel.id)
    ) {
      return false;
    }

    return (
      !(message.channel instanceof DMChannel) &&
      this.discordClient.user &&
      message.mentions.has(this.discordClient.user)
    );
  }
}
