/* eslint-disable no-use-before-define */
import { readFile, writeFile } from 'fs/promises';

import { ITalker } from '../entities/Talker';
import { IDatabase } from './IDatabase';

export class Database implements IDatabase {
  private path: string;
  private static INSTANCE: Database;

  public static getInstance(): Database {
    if (!Database.INSTANCE) {
      Database.INSTANCE = new Database();
    }

    return Database.INSTANCE;
  }

  constructor() {
    this.path = 'src/talker.json';
  }

  async read(): Promise<ITalker[]> {
    try {
      const talkers = await readFile(this.path, 'utf8');
      return JSON.parse(talkers);
    } catch (error) {
      throw new Error('Não foi possível ler os dados');
    }
  }

  async write(content: ITalker[]): Promise<void> {
    try {
      await writeFile(this.path, JSON.stringify(content));
    } catch (error) {
      throw new Error('Não foi possível salvar os dados');
    }
  }
}
