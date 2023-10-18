import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Message } from 'discord.js';

interface DiscordExecutionContext extends ExecutionContext {
  getMessage(): Message;
}

export class AuthorGuard implements CanActivate {
  canActivate(context: DiscordExecutionContext): boolean {
    const message = context.getArgByIndex(0);

    return !message.author.bot;
  }
}
