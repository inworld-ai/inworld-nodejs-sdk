# When Inworld AI Node.js SDK should be extended

Certain features are not directly accessible through the Inworld AI Node.js SDK but are supported at the protocol level:

1. Some features are exclusively used within [Studio](https://studio.inworld.ai), and it is reasonable to hide their implementation.
1. Certain features are currently in the development phase and are not yet accessible on the production server from the backend. Nevertheless, it is necessary to test them before introducing new methods into DSL.


# How to extend Inworld AI Node.js SDK

Here are several ways to enhance the functionality of the Inworld AI Node.js SDK:

1. Extending the [Load Scene Request](#extend-load-scene-request). For example, it's possible to add additional capabilities.
1. Manual Parsing of [Load Scene Response](#parse-load-scene-response). For example, parse the load scene response to retrieve previous state packets and render them as part of conversation history.
1. Sending [Custom Packets](#send-custom-packet) (ensure you provide any necessary additional capabilities).


## Extend load scene request

```ts
  const beforeLoadScene = (request) => {
    const capabilities = new CapabilitiesRequest()
      .setAudio(true)
      .setText(true)
      .setRegenerateResponse(true);
    request.setCapabilities(capabilities);

    return request;
  };

  const client = new InworldClient()
    .setConfiguration({ capabilities })
    .setUser(user)
    .setScene(sceneName)
    ...
    .setExtension({ beforeLoadScene });

  this.connection = client.build();
```

## Parse load scene response

```ts
  const afterLoadScene = (response) => {
    // Do something with response.
    console.log(response.getPreviousState()?.getStateHoldersList());
  };
  const client = new InworldClient()
    .setConfiguration({ capabilities })
    .setUser(user)
    .setScene(sceneName)
    ...
    .setExtension({ afterLoadScene });

  this.connection = client.build();
```

## Send custom packet

```ts
  interface ExtendedInworldPacket extends InworldPacket {
    isRegenerateResponse: boolean;
  }

  const sendRegenerateResponse = (interactionId?: string) => {
    const customPacket = this.connection.baseProtoPacket();
    const mutation = new MutationEvent().setRegenerateResponse(
      new RegenerateResponse().setInteractionId(interactionId ?? uuid()),
    );

    customPacket.setMutation(mutation);
    customPacket.getPacketId().setCorrelationId(correlationId);

    return customPacket;
  };

  const convertPacketFromProto = (proto) => {
    const packet = InworldPacket.fromProto(
      proto,
    ) as ExtendedInworldPacket;

    packet.isRegenerateResponse = true;

    return packet;
  };

  const interactionId = 'some-interaction-id';
  const client = new InworldClient<ExtendedInworldPacket>()
    .setConfiguration({ capabilities })
    .setUser(user)
    .setScene(sceneName)
    ...
    .setExtension({
      convertPacketFromProto,
      // See ## Extend load scene request
      beforeLoadScene,
    });

  this.connection = client.build();

  this.connection.sendCustomPacket(() => sendRegenerateResponse(interactionId));
```
