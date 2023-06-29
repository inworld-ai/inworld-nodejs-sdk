import { ServiceError } from '@grpc/grpc-js';
import path = require('path');
import {
  createLogger,
  format,
  Logger as WinstonLogger,
  transports,
} from 'winston';

interface LoggerMessage {
  action: string;
  data?: any;
  sessionId?: string;
}

export class Logger {
  private static instance: Logger;

  private ENABLED: boolean;
  private FOLDER: string;
  private logger: WinstonLogger;

  constructor() {
    this.FOLDER = process.env.NODE_SDK_INWORLD_LOGGER_FOLDER;
    this.ENABLED =
      process.env.NODE_SDK_INWORLD_LOGGER_ENABLED === 'true' ? true : false;

    if (this.ENABLED) {
      this.logger = createLogger({
        format: format.combine(
          format.timestamp(),
          format.errors({ stack: true }),
          format.splat(),
          format.json(),
        ),
        ...(this.FOLDER
          ? {
              exceptionHandlers: [
                new transports.File({
                  filename: path.join(this.FOLDER, 'exceptions.log'),
                }),
              ],
              transports: [
                this.createTransport('debug', this.FOLDER),
                this.createTransport('error', this.FOLDER),
              ],
            }
          : {
              transports: [
                this.createTransport('debug'),
                this.createTransport('error'),
              ],
            }),
      });
    }
  }

  static getInstance(): Logger {
    Logger.instance = Logger.instance || new Logger();

    return Logger.instance;
  }

  debug(message: LoggerMessage) {
    this.logger?.debug(message);
  }

  error(err: ServiceError | Error) {
    this.logger?.error(err);
  }

  private createTransport(level: string, folder?: string) {
    return folder
      ? new transports.File({
          filename: path.join(folder, `${level}.log`),
          level,
        })
      : new transports.Console({ level });
  }
}
