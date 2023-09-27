import { InjectDiscordClient } from '@discord-nestjs/core';
import { DialogParticipant, DialogPhrase } from '@inworld/nodejs-sdk';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client as DiscordClient, Message } from 'discord.js';

@Injectable()
export class DiscordService {
  constructor(
    @InjectDiscordClient()
    private readonly discordClient: DiscordClient,
    private configService: ConfigService,
  ) {}

  async extractPreviousDialog(message: Message) {
    const { channel } = message;

    let previousDialog: DialogPhrase[] = [];

    if (channel.isThread()) {
      const messages = await channel.messages.fetch({
        limit: this.configService.get('DISCORD_MESSAGES_FETCH_LIMIT'),
      });
      const starterMessage = await channel.fetchStarterMessage();
      previousDialog = [
        ...(starterMessage
          ? [
              {
                talker: DialogParticipant.CHARACTER,
                phrase: this.extractText(starterMessage),
              },
            ]
          : []),
        ...messages
          .reverse()
          .map((m) => ({
            talker: m.author.bot
              ? DialogParticipant.PLAYER
              : DialogParticipant.CHARACTER,
            phrase: this.extractText(m),
          }))
          .slice(1),
      ];
    }

    return previousDialog;
  }

  extractText(message: Message) {
    return message.content.replace(
      `<@${this.discordClient.user.id}>`,
      this.discordClient.user.displayName,
    );
  }
}
