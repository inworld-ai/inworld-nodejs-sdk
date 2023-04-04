beforeEach(() => {
  jest.resetModules();
  process.env = {};
});

test('should use process.env variables', () => {
  process.env.NODE_SDK_INWORLD_STUDIO_HOST = 'studio-host';
  process.env.NODE_SDK_INWORLD_STUDIO_SSL = 'false';
  process.env.NODE_SDK_INWORLD_ENGINE_HOST = 'engine-host';
  process.env.NODE_SDK_INWORLD_ENGINE_SSL = 'false';

  const { Config } = require('../../src/common/config');
  const config = Config.getInstance();

  expect(config.getStudioHost()).toEqual(
    process.env.NODE_SDK_INWORLD_STUDIO_HOST,
  );
  expect(config.getEngineHost()).toEqual(
    process.env.NODE_SDK_INWORLD_ENGINE_HOST,
  );
  expect(config.getStudioSsl()).toEqual(false);
  expect(config.getEngineSsl()).toEqual(false);
});

test('should use default values', () => {
  const { Config } = require('../../src/common/config');
  const config = Config.getInstance();

  expect(config.getStudioHost()).toEqual('api-studio.inworld.ai:443');
  expect(config.getEngineHost()).toEqual('api-engine.inworld.ai:443');
  expect(config.getStudioSsl()).toEqual(true);
  expect(config.getEngineSsl()).toEqual(true);
});
