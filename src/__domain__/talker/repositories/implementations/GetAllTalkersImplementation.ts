import { ITalker } from '../../entities/Talker';
import { IDatabase } from '../../model/IDatabase';
import { IGetAllTalkerRepository } from '../IGetAllTalkerRepository';

export class GetAllTalkersImplementation implements IGetAllTalkerRepository {
  private database: IDatabase;

  constructor(database: IDatabase) {
    this.database = database;
  }

  async getAll(): Promise<ITalker[]> {
    return this.database.read();
  }
}
