import { CapabilitiesConfiguration } from '@proto/ai/inworld/engine/configuration/configuration_pb';

import { Capabilities } from '../common/data_structures';

export class Capability {
  static toProto(capabilities: Capabilities) {
    const {
      logsWarning = true,
      logsInfo = true,
      logsDebug = false,
      logsInternal = false,
    } = capabilities;

    return new CapabilitiesConfiguration()
      .setAudio(capabilities.audio ?? true)
      .setDebugInfo(capabilities.debugInfo ?? false)
      .setEmotions(capabilities.emotions ?? false)
      .setInterruptions(capabilities.interruptions ?? false)
      .setLogs(logsWarning || logsInfo || logsDebug || logsInternal)
      .setLogsWarning(logsWarning)
      .setLogsInfo(logsInfo)
      .setLogsDebug(logsDebug)
      .setLogsInternal(logsInternal)
      .setMultiAgent(true)
      .setMultiModalActionPlanning(
        capabilities.multiModalActionPlanning ?? false,
      )
      .setNarratedActions(capabilities.narratedActions ?? false)
      .setPerceivedLatencyReport(capabilities.perceivedLatencyReport ?? false)
      .setPhonemeInfo(capabilities.phonemes ?? false)
      .setPingPongReport(capabilities.pingPongReport ?? true)
      .setSilenceEvents(capabilities.silence ?? false);
  }
}
