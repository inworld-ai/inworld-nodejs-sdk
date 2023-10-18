import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SentryModule } from '@ntegral/nestjs-sentry';
import { GatewayIntentBits, Partials } from 'discord.js';
import { WinstonModule } from 'nest-winston';

import { BotModule } from './bot/bot.module';
import { validationSchema } from './env.validation-scheme';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ...(process.env.NOENV && { ignoreEnvFile: true }),
      validationSchema,
    }),
    WinstonModule.forRoot({}),
    SentryModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        dsn: configService.get('SENTRY_DSN'),
        environment: configService.get('SENTRY_ENVIRONMENT'),
        release: configService.get('SENTRY_RELEASE'),
      }),
      inject: [ConfigService],
    }),
    DiscordModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        token: configService.get('DISCORD_BOT_TOKEN'),
        discordClientOptions: {
          intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.DirectMessages,
            GatewayIntentBits.DirectMessageTyping,
            GatewayIntentBits.DirectMessageReactions,
          ],
          partials: [Partials.Channel],
        },
      }),
      inject: [ConfigService],
    }),
    BotModule,
  ],
})
export class AppModule {}
