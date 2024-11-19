import { LogsEvent as ProtoLogsEvent } from '@proto/ai/inworld/packets/packets_pb';

import {
  LogLevel,
  LogsEventLogDetail,
  ProtobufValue,
} from '../../common/data_structures';

export class LogsEvent {
  readonly text: string;
  readonly level: LogLevel;
  readonly metadata: Record<string, string>;
  readonly details: LogsEventLogDetail[] | undefined;

  constructor({
    text,
    level,
    metadata,
    details,
  }: {
    text: string;
    level: LogLevel;
    metadata: Record<string, string>;
    details: LogsEventLogDetail[] | undefined;
  }) {
    this.text = text;
    this.level = level;
    this.metadata = metadata;

    if (details?.length >= 0) {
      this.details = details;
    }
  }

  static fromProto(proto: ProtoLogsEvent) {
    return new LogsEvent({
      text: proto.getText(),
      level: LogsEvent.getLogLevel(proto.getLevel()),
      metadata: Object.fromEntries(proto.getMetadataMap().entries()),
      details: proto.getDetailsList()?.map((detail) => ({
        text: detail.getText(),
        detail: detail.getDetail()?.toJavaScript() as ProtobufValue,
      })),
    });
  }

  private static getLogLevel(logLevel: ProtoLogsEvent.LogLevel) {
    switch (logLevel) {
      case ProtoLogsEvent.LogLevel.WARNING:
        return LogLevel.WARNING;
      case ProtoLogsEvent.LogLevel.INFO:
        return LogLevel.INFO;
      case ProtoLogsEvent.LogLevel.DEBUG:
        return LogLevel.DEBUG;
      case ProtoLogsEvent.LogLevel.INTERNAL:
        return LogLevel.INTERNAL;
      default:
        return LogLevel.UNSPECIFIED;
    }
  }
}
