import { ITalker } from '../../entities/Talker';
import { IDatabase } from '../../model/IDatabase';
import { IGetTalkerByIdRepository } from '../IGetTalkerByIdRepository';

export class GetTalkerByIdImplementation implements IGetTalkerByIdRepository {
  private db: ITalker[];

  constructor(private database: IDatabase) {
    this.db = [];
  }

  async getById(id: number): Promise<ITalker | undefined> {
    this.db = await this.database.read();
    return this.db.find(talker => talker.id === id);
  }
}
