import { InworldClient, status } from '@inworld/nodejs-sdk';

export async function sendText(
  apikey: [string, string],
  username: string,
  scene: string,
  message: string,
): Promise<[string, string]> {
  let output: [string, string] = ['', ''];

  return new Promise<[string, string]>(async (resolve, reject) => {
    const client = new InworldClient()
      .setApiKey({
        key: apikey[0],
        secret: apikey[1],
      })
      .setUser({ fullName: username })
      .setConfiguration({
        capabilities: { emotions: true },
      })
      .setScene(scene)
      .setOnError((err) => {
        switch (err.code) {
          case status.ABORTED:
          case status.CANCELLED:
            break;
          default:
            // console.error(`Error: ${err.message}`);
            reject(err); // Reject the promise if there's an error
            break;
        }
      })
      .setOnMessage((packet) => {
        // TEXT
        if (packet.isText()) {
          // console.log(`Text: ${packet.text.text}`);
          output[0] += packet.text.text + '\n';
        }

        // EMOTION
        if (packet.isEmotion()) {
          // console.log(`Emotions:
          //   behavior = ${packet.emotions.behavior.code},
          //   strength = ${packet.emotions.strength.code}
          // `);
          output[1] += packet.emotions.behavior.code + '\n';
          output[1] += packet.emotions.strength.code + '\n';
        }

        // INTERACTION_END
        if (packet.isInteractionEnd()) {
          connection.close();
          resolve(output);
        }
      });

    const connection = client.build();

    await connection.sendText(message);
  });
}
