export class Config {
  private static instance: Config;

  private STUDIO_HOST: string;
  private STUDIO_SSL: boolean;
  private ENGINE_HOST: string;
  private ENGINE_SSL: boolean;

  constructor() {
    this.STUDIO_HOST =
      process.env.NODE_SDK_INWORLD_STUDIO_HOST || 'api-studio.inworld.ai:443';
    this.STUDIO_SSL =
      process.env.NODE_SDK_INWORLD_STUDIO_SSL === 'false' ? false : true;
    this.ENGINE_HOST =
      process.env.NODE_SDK_INWORLD_ENGINE_HOST || 'api-engine.inworld.ai:443';
    this.ENGINE_SSL =
      process.env.NODE_SDK_INWORLD_ENGINE_SSL === 'false' ? false : true;
  }

  static getInstance(): Config {
    Config.instance = Config.instance || new Config();

    return Config.instance;
  }

  public getStudioHost() {
    return this.STUDIO_HOST;
  }

  public getStudioSsl() {
    return this.STUDIO_SSL;
  }

  public getEngineHost() {
    return this.ENGINE_HOST;
  }

  public getEngineSsl() {
    return this.ENGINE_SSL;
  }
}
