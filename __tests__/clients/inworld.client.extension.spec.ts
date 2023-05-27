import { InworldClient } from '../../src/clients/inworld.client';
import { ConnectionService } from '../../src/services/connection.service';
import { ExtendedInworldPacket } from '../data_structures';
import {
  extendedCapabilities,
  extension,
  KEY,
  SCENE,
  SECRET,
} from '../helpers';

jest.mock('../../src/services/connection.service');

describe('extension', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should use extended capabilities', () => {
    const inworldClient = new InworldClient<ExtendedInworldPacket>()
      .setApiKey({ key: KEY, secret: SECRET })
      .setScene(SCENE)
      .setExtension(extension);

    inworldClient.build();

    expect(ConnectionService).toHaveBeenCalledTimes(1);
    expect(ConnectionService).toHaveBeenCalledWith(
      expect.objectContaining({
        config: {
          connection: expect.anything(),
          capabilities: extendedCapabilities,
        },
      }),
    );
  });
});
