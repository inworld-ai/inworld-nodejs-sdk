# Install dependencies

```sh
yarn install
```

# Setup variables in .env file or using export command

|Name|Description|Details|
|--:|--:|--:|
|INWORLD_KEY|Inworld application key|Get key from [integrations page](https://studio.inworld.ai)|
|INWORLD_SECRET|Inworld application secret|Get secret from [integrations page](https://studio.inworld.ai)|
|INWORLD_SCENE|Full scene name|It should have one of the following format: workspaces/{WORKSPACE_NAME}/characters/{CHARACTER_NAME} workspaces/{WORKSPACE_NAME}/scenes/{SCENE_NAME}|

# Start application

```sh
yarn start
```

# How it works

* Ensure you file has sample **rate = 16000 Hz** and is in **LINEAR16** format. Otherwise convert it manually

```sh
ffmpeg -i test.mp3  -ar 16000 -sample_fmt s16 test.wav
```

* Split file to chunks. I.e. specify `highWaterMark` for `createReadStream` call. Chunk's size should not be to large.

* Send `sendAudioSessionStart` event.

* Send chunks one by one using timeout.

* Send `sendAudioSessionEnd` event.
