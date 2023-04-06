import { Character, InworldConnectionService } from '@inworld/nodejs-sdk';

export const listAll = async (connection: InworldConnectionService) => {
  const characters = await connection.getCharacters();

  if (characters.length) {
    characters.map((c, index) => {
      console.log(
        `${index}: ${c.getId()} (${c.getResourceName()}:${c.getDisplayName()})`,
      );
    });
    console.log('------------------------------');
  } else {
    console.log('No characters');
  }
};

export const characterInfo = (character: Character) =>
  `Character: ${character.getId()} (${character.getResourceName()}:${character.getDisplayName()})`;

export const changeCharacter = async (
  connection: InworldConnectionService,
  id: string,
) => {
  const characters = await connection.getCharacters();
  const character = characters.find((c) => c.getId() === id);

  if (character) {
    connection.setCurrentCharacter(character);
    console.log(characterInfo(character));
    console.log('------------------------------');
  } else {
    console.log('Character not found');
  }
};
