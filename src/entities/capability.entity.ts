import { CapabilitiesConfiguration } from '@proto/ai/inworld/engine/configuration/configuration_pb';

import { Capabilities } from '../common/data_structures';

export class Capability {
  static toProto(capabilities: Capabilities) {
    return new CapabilitiesConfiguration()
      .setAudio(capabilities.audio ?? true)
      .setDebugInfo(capabilities.debugInfo ?? false)
      .setEmotions(capabilities.emotions ?? false)
      .setInterruptions(capabilities.interruptions ?? false)
      .setLogs(capabilities.logs ?? false)
      .setLogsWarning(capabilities.logsWarning ?? true)
      .setLogsInfo(capabilities.logsInfo ?? true)
      .setLogsDebug(capabilities.logsDebug ?? false)
      .setLogsInternal(capabilities.logsInternal ?? false)
      .setMultiAgent(true)
      .setMultiModalActionPlanning(
        capabilities.multiModalActionPlanning ?? false,
      )
      .setNarratedActions(capabilities.narratedActions ?? false)
      .setPerceivedLatencyReport(capabilities.perceivedLatencyReport ?? true)
      .setPhonemeInfo(capabilities.phonemes ?? false)
      .setPingPongReport(capabilities.pingPongReport ?? true)
      .setSilenceEvents(capabilities.silence ?? false);
  }
}
