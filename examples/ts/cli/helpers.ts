import {
  Character,
  ConversationService,
  InworldConnectionService,
} from '@inworld/nodejs-sdk';

export const listCharacters = async (connection: InworldConnectionService) => {
  const characters = await connection.getCharacters();

  if (characters.length) {
    characters.map((c, index) => {
      console.log(`${index}: ${c.id} (${c.resourceName}:${c.displayName})`);
    });
    console.log('------------------------------');
  } else {
    console.log('No characters');
  }
};

export const characterInfo = (character: Character) =>
  `Character: ${character.id} (${character.resourceName}:${character.displayName})`;

export const changeCharacter = async (
  connection: InworldConnectionService,
  id: string,
) => {
  const characters = await connection.getCharacters();
  const character = characters.find((c) => c.id === id);

  if (character) {
    connection.setCurrentCharacter(character);
    console.log(characterInfo(character));
    console.log('------------------------------');
  } else {
    console.log('Character not found');
  }
};

export const conversationInfo = async (conversation: ConversationService) => {
  console.log(`ConversartionId: ${conversation.getConversationId()}`);
  conversation.getCharacters().forEach((c) => {
    console.log(`${conversation.getConversationId()}: ${characterInfo(c)}`);
  });
  console.log('------------------------------');
};

export const listConversations = async (
  connection: InworldConnectionService,
) => {
  const conversations = connection.getConversations();

  if (conversations.length) {
    conversations.map((c) => {
      console.log(`Conversartion (${c.conversationId})`);
      c.characters.forEach((c) => {
        console.log(characterInfo(c));
      });
      console.log('------------------------------');
    });
  } else {
    console.log('No conversations');
  }
};

export const changeScene = async (
  connection: InworldConnectionService,
  scene: string,
) => {
  try {
    await connection.changeScene(scene);
    console.log('Scene changed');
  } catch (e) {
    console.log('Scene not changed: ', e.message);
  }
};

export const addCharacters = async (
  connection: InworldConnectionService,
  characters: string[],
) => {
  const done = await connection.addCharacters(characters);
  console.log(done ? 'Characters loaded' : 'Characters not loaded.');
};
