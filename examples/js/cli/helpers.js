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

const changeScene = async (connection, scene) => {
  const done = await connection.changeScene(scene);
  console.log(done ? 'Scene changed' : 'Scene not changed.');
};

const addCharacters = async (connection, characters) => {
  const done = await connection.addCharacters(characters);
  console.log(done ? 'Characters loaded' : 'Characters not loaded.');
};

module.exports = {
  listAll,
  changeCharacter,
  characterInfo,
  changeScene,
  addCharacters,
};
