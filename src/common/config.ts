export class Config {
  private static instance: Config;

  private ENGINE_HOST: string;
  private ENGINE_SSL: boolean;

  constructor() {
    this.ENGINE_HOST =
      process.env.NODE_SDK_INWORLD_ENGINE_HOST || 'api-engine.inworld.ai:443';
    this.ENGINE_SSL =
      process.env.NODE_SDK_INWORLD_ENGINE_SSL === 'false' ? false : true;
  }

  static getInstance(): Config {
    Config.instance = Config.instance || new Config();

    return Config.instance;
  }

  public getHost() {
    return this.ENGINE_HOST;
  }

  public getSsl() {
    return this.ENGINE_SSL;
  }
}
