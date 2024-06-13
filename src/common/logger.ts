import {
  createLogger,
  format,
  Logger as WinstonLogger,
  transports,
} from 'winston';

import { InworldError } from '../entities/error.entity';
const { File: TransportsFile } = transports;

interface LoggerMessage {
  action?: string;
  data?: any;
  sessionId?: string;
}

export enum LoggerLevel {
  DEBUG = 'debug',
  WARN = 'warn',
  ERROR = 'error',
}

export class Logger {
  private static instance: Logger;

  private level: LoggerLevel;
  private file: string | undefined;
  private logger: WinstonLogger;

  constructor() {
    this.file = process.env.NODE_SDK_INWORLD_LOGGER_FILE;
    this.level = Logger.getLevel();

    if (this.level) {
      const transports = [
        this.createTransport(this.level as string, this.file),
      ];
      this.logger = createLogger({
        format: format.combine(
          format.timestamp(),
          format.errors({ stack: true }),
          format.splat(),
          format.json(),
          format.prettyPrint(),
        ),
        transports,
        exceptionHandlers: this.createTransport(
          this.level as string,
          this.file,
        ),
      });
    }
  }

  static getLevel() {
    const parsed =
      process.env.NODE_SDK_INWORLD_LOGGER_LEVEL?.trim()?.toLocaleLowerCase() ??
      '';

    return parsed as LoggerLevel;
  }

  static getInstance(): Logger {
    Logger.instance = Logger.instance || new Logger();

    return Logger.instance;
  }

  debug(message: LoggerMessage) {
    this.logger?.debug(message);
  }

  warn(message: LoggerMessage) {
    this.logger?.warn(message);
  }

  error(err: InworldError) {
    this.logger?.error(err);
  }

  private createTransport(level: string, file?: string) {
    return file
      ? new TransportsFile({
          filename: file,
          level,
        })
      : new transports.Console({ level });
  }
}
