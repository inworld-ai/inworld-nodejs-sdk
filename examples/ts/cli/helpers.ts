import * as fs from 'fs';
import * as util from 'util';

import YAML = require('yaml');

import {
  Character,
  ConversationService,
  EntityItemProps,
  InworldConnectionService,
} from '@inworld/nodejs-sdk';

import { MapSimulatorTriggers } from './components/types';

const access = util.promisify(fs.access);
const readFile = util.promisify(fs.readFile);

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

export const listItems = async (items: EntityItemProps[]) => {
  if (items.length > 0) {
    console.log('------------------------------');
    items.forEach((i) => {
      console.log(`${i.displayName} (${i.id})`);
    });
    console.log('------------------------------');
  } else {
    console.error('No items found');
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

export const checkPathAccess = async (folder: fs.PathLike) => {
  try {
    await access(folder, fs.constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
};

export const readYaml = async (file: string) => {
  try {
    const data = await readFile(file, 'utf8');
    return YAML.parse(data);
  } catch (e) {
    return '';
  }
};

export const addItems = async (
  connection: InworldConnectionService,
  filePath: string,
) => {
  if (!(await checkPathAccess(filePath))) {
    console.error(`File ${filePath} not found`);
    return;
  }

  const items: EntityItemProps[] = [];
  const data = await readYaml(filePath);

  if (data.items?.length > 0) {
    console.log('\nAdding items...');
    data.items.forEach(async (i: any) => {
      const { entities, display_name, ...item } = i;
      const itemToSend = {
        ...item,
        displayName: display_name,
      };
      items.push(itemToSend);
      await connection.entity.createOrUpdateItems({
        items: [itemToSend],
        addToEntities: entities,
      });
    });

    await connection.sendTrigger(MapSimulatorTriggers.Start);
  }

  return items;
};
