beforeEach(() => {
  jest.resetModules();
  process.env = {};
});

test('should use process.env variables', () => {
  process.env.NODE_SDK_INWORLD_ENGINE_HOST = 'engine-host';
  process.env.NODE_SDK_INWORLD_ENGINE_SSL = 'false';

  const { Config } = require('../../src/common/config');
  const config = Config.getInstance();

  expect(config.getHost()).toEqual(process.env.NODE_SDK_INWORLD_ENGINE_HOST);
  expect(config.getSSL()).toEqual(false);
});

test('should use default values', () => {
  const { Config } = require('../../src/common/config');
  const config = Config.getInstance();

  expect(config.getHost()).toEqual('api-engine.inworld.ai:443');
  expect(config.getSSL()).toEqual(true);
});
