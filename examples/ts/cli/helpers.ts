import { Character, InworldConnectionService } from '@inworld/nodejs-sdk';

export const listAll = async (connection: InworldConnectionService) => {
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

export const changeScene = async (
  connection: InworldConnectionService,
  scene: string,
) => {
  const done = await connection.changeScene(scene);
  console.log(done ? 'Scene changed' : 'Scene not changed.');
};

export const addCharacters = async (
  connection: InworldConnectionService,
  characters: string[],
) => {
  const done = await connection.addCharacters(characters);
  console.log(done ? 'Characters loaded' : 'Characters not loaded.');
};
