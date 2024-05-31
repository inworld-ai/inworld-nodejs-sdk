const listCharacters = async (connection) => {
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

const characterInfo = (character) =>
  `Character: ${character.id} (${character.resourceName}:${character.displayName})`;

const changeCharacter = async (connection, id) => {
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

const conversationInfo = async (conversation) => {
  console.log(`ConversartionId: ${conversation.getConversationId()}`);
  conversation.getCharacters().forEach((c) => {
    console.log(`${conversation.getConversationId()}: ${characterInfo(c)}`);
  });
  console.log('------------------------------');
};

const listConversations = async (connection) => {
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

module.exports = {
  listCharacters,
  changeCharacter,
  characterInfo,
  conversationInfo,
  listConversations,
};
