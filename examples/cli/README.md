# Using the Command-Line Interface

This folder contains two examples based on **automatic** and **manual** reconnects.

## Requirements
- Node 16 is recommended
- Latest version of [sox](http://sox.sourceforge.net) installed and available in PATH

## Installation

### Setup variables in .env file

|Name|Description|Details|
|--:|--:|--:|
|INWORLD_KEY|Inworld application key|Get key from [integrations page](https://studio.inworld.ai)|
|INWORLD_SECRET|Inworld application secret|Get secret from [integrations page](https://studio.inworld.ai)|
|INWORLD_SCENE|Full scene name|It should have one of the following format: workspaces/{WORKSPACE_NAME}/characters/{CHARACTER_NAME} workspaces/{WORKSPACE_NAME}/scenes/{SCENE_NAME}|

### Install dependencies

```sh
yarn install
```

## Example with auto reconnect

### Start application

```sh
yarn start:auto-reconnect
```

You will need to use the following console commands to start the client with auto reconnect:
&emsp;|- /start - starts audio capturing.
&emsp;|- /end - ends audio capturing.
&emsp;|- /trigger - send custom trigger.
&emsp;|- /info - shows current character.
&emsp;|- /list-all - shows available characters (created within the scene).
&emsp;|- /character %character-id% - id of the target character (Get full list using /list-all command).
&emsp;|- c - cancel current response.
&emsp;|- <any other text> - sends text event to server.

### Setup connection

```typescript
const client = new InworldClient()
  .setApiKey({
    key: process.env.INWORLD_KEY!,
    secret: process.env.INWORLD_SECRET!,
  })
  .setScene(process.env.INWORLD_SCENE!)
  .setOnError((err: ServiceError) => console.error(`Error: ${err.message}`))
  .setOnDisconnect(() => console.log('Disconnected'))
  .setOnMessage(() => console.log('Message was received'))
  .build();
}
```

### Get list of characters and select one of them

If the scene contains more than one character, then the fist one will be used by default. You can change this manually by running,
```typescript
const characters = await connection.getCharacters();
const character = characters.find((c) => c.getId() === id);

connection.setCurrentCharacter(character);
```

This should produce the following console output,

```sh
/info
Character: 4bafd052-fe3e-483b-9eaf-ab20cadf84b2 (workspaces/test-workspace/characters/character1:First character)
------------------------------
/list-all
0: 4bafd052-fe3e-483b-9eaf-ab20cadf84b2 (workspaces/test-workspace/characters/character1:First character)
1: 82825e9c-7d80-42a4-b6b2-f313c1ac29ed (workspaces/test-workspace/characters/character2:Second character)
------------------------------
/character 82825e9c-7d80-42a4-b6b2-f313c1ac29ed
Character: 82825e9c-7d80-42a4-b6b2-f313c1ac29ed (workspaces/test-workspace/characters/character2:Second character)
------------------------------
```

### Sending a text message, trigger, or cancelling the response to a character
The connection will be opened automatically on send if it is closed, or an existing open connection will be used. Our server will close the connection automatically in one minute if there is inactivity.

```typescript
await connection.sendText('Hello');
await connection.sendTrigger('Some action');
await connection.sendCancelResponse();
```

### Send audio chunk to character

Initialize [recorder](https://www.npmjs.com/package/node-record-lpcm16) and send audio on each data chunk that it receives. Before beginning capture, send an `audio session start` event to the connection. Do not forget to send an `audio session end` event at the end of the capture.

```typescript
await connection.sendAudioSessionStart();
// Start audio capturing here
await connection.sendAudio(chunk);
...
// Stop audio capturing here
await connection.sendAudioSessionEnd();
```
This should produce the following console output,

```sh
/start
Recognized: How are you?, final=true
Character(aa1c8634-df62-4d8b-94eb-4188cf8fbea7) to Player (i=599d9d2e-9994-4208-bb52-b8d5d8997819, u=620d9711-42d4-433f-b5e9-455ac0b7f6aa): I\'m good, thanks!
Character(aa1c8634-df62-4d8b-94eb-4188cf8fbea7) to Player (i=211644a2-2657-40be-b6e6-b88194604717, u=606c9cf7-334b-43e6-af4e-269b78083a87):  Thank you for asking.
/end
```

### Close connection

You can close the connection manually if it is not currently required. Be sure to do this on your application stop, e.g., ‘SIGINT’ event. It will be open automatically on next packet send.

```typescript
connection.close();
```

## Example with manual reconnect

### Start application

```sh
yarn start:manual-reconnect
```

You will need to use the following console commands to start the client with auto reconnect:
&emsp;|- /open - open connection.
&emsp;|- /close - close connection.
&emsp;|- /start - starts audio capturing.
&emsp;|- /end - ends audio capturing.
&emsp;|- /trigger - send trigger event.
&emsp;|- /info - shows current character.
&emsp;|- /list-all - shows available characters (created within the scene).
&emsp;|- /character %character-id% - id of the target character (Get full list using /list-all command).
&emsp;|- c - cancel current response.
&emsp;|- <any other text> - sends text event to server.

### Setup connection
If you would like to open and close the connection manually, then you should use the `autoReconnect = false` option to configuration. Also it's possible to specify disconnectTimeout (1 minute is used by default).

```typescript
const client = new InworldClient()
  .setApiKey({
    key: process.env.INWORLD_KEY!,
    secret: process.env.INWORLD_SECRET!,
  })
  .setScene(process.env.INWORLD_SCENE!)
  .setConfiguration({
    connection: {
      autoReconnect: false,
      disconnectTimeout: 30 * 1000, // 30 seconds
    },
  })
  .setOnError((err: ServiceError) => console.error(`Error: ${err.message}`))
  .setOnDisconnect(() => console.log('Disconnected'))
  .setOnMessage(() => console.log('Message was received'))
  .build();
}
```

### Open connection
You should open the connection and manage it manually as follows,

```typescript
  if (!connection.isActive()) {
    await connection.open();
  }
  // Do something here
```

### Send message to character

If the connection is open, a message will be sent to the character. Otherwise, you will receive an error message.

```typescript
await connection.sendText('Hello');
// Error: Unable to send data due to an inactive connection
```

### Close connection

You can close the connection manually if it is not currently required. Be sure to do this on your application stop, e.g., ‘SIGINT’ event. It can be opened later.

```typescript
connection.close();
```

## Handlers

### onDisconnect

Each time the server closes connection or you call `connection.close`, a disconnect event will be triggered.

```typescript
connection.setOnDisconnect(() => console.log('Disconnected'));
```

### onError

```typescript
connection.setOnError((err: ServiceError) => console.error(`Error: ${err.message}`));
```

### onMessage

To detect the type of message and print or play, you can use,

```typescript
connection.setOnMessage(async (packet: InworldPacket) => {
  const { packetId } = packet;
  const i = packetId.packetId;
  const u = packetId.utteranceId;

  // TEXT
  if (packet.isText()) {
    const textEvent = packet.text;

    if (packet.routing.source.isPlayer) {
      if (textEvent.final) {
        console.log(
          `Recognized: ${textEvent.text}, final=${textEvent.final}`,
        );
      }
    } else {
      console.log(
        `${this.renderEventRouting(packet)} (i=${i}, u=${u}): ${
          textEvent.text
        }`,
      );
    }
  }

  // AUDIO
  if (packet.isAudio()) {
    player.send(packet.audio.chunk);
  }
});
```
