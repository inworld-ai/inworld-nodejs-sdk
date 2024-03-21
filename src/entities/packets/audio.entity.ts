import {
  AdditionalPhonemeInfo as ProtoAdditionalPhonemeInfo,
  DataChunk,
} from '@proto/ai/inworld/packets/packets_pb';
import { Duration } from 'google-protobuf/google/protobuf/duration_pb';

export interface AdditionalPhonemeInfo {
  phoneme?: string;
  startOffsetS?: number;
}

export class AudioEvent {
  readonly chunk: string;
  readonly additionalPhonemeInfo: AdditionalPhonemeInfo[] | undefined;

  constructor({
    chunk,
    additionalPhonemeInfo,
  }: {
    chunk: string;
    additionalPhonemeInfo?: AdditionalPhonemeInfo[];
  }) {
    this.chunk = chunk;
    this.additionalPhonemeInfo = additionalPhonemeInfo;
  }

  static fromProto(proto: DataChunk) {
    return new AudioEvent({
      chunk: proto.getChunk_asB64(),
      additionalPhonemeInfo: proto.getAdditionalPhonemeInfoList().map(
        (info: ProtoAdditionalPhonemeInfo) =>
          ({
            phoneme: info.getPhoneme(),
            startOffsetS: this.durationToSeconds(info.getStartOffset()),
          }) as AdditionalPhonemeInfo,
      ),
    });
  }

  private static durationToSeconds(duration: Duration) {
    return duration.getSeconds() + duration.getNanos() / 1000000000;
  }
}
