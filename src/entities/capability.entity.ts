import { CapabilitiesConfiguration } from '@proto/ai/inworld/engine/configuration/configuration_pb';

import { Capabilities } from '../common/data_structures';

export class Capability {
  static toProto(capabilities: Capabilities) {
    return new CapabilitiesConfiguration()
      .setAudio(capabilities.audio ?? true)
      .setDebugInfo(capabilities.debugInfo ?? false)
      .setEmotions(capabilities.emotions ?? false)
      .setInterruptions(capabilities.interruptions ?? false)
      .setMultiAgent(true)
      .setMultiModalActionPlanning(
        capabilities.multiModalActionPlanning ?? false,
      )
      .setNarratedActions(capabilities.narratedActions ?? false)
      .setPhonemeInfo(capabilities.phonemes ?? false)
      .setSilenceEvents(capabilities.silence ?? false);
  }
}
