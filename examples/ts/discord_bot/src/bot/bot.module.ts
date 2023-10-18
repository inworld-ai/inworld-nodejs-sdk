import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import {
  makeGaugeProvider,
  PrometheusModule,
} from '@willsoto/nestjs-prometheus';

import { BotService } from './bot.service';
import { DiscordService } from './discord.service';
import { InworldService } from './inworld.service';

@Module({
  imports: [DiscordModule.forFeature(), PrometheusModule.register()],
  providers: [
    BotService,
    DiscordService,
    InworldService,
    makeGaugeProvider({
      name: 'inworld_ai_service_connections_count',
      help: 'Total Inworld AI connections count.',
    }),
  ],
})
export class BotModule {}
