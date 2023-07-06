const listAll = async (connection) => {
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

module.exports = {
  listAll,
  changeCharacter,
  characterInfo,
};
