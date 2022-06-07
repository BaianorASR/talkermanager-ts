import { ITalker, Talker } from '../../entities/Talker';
import { IDatabase } from '../../model/IDatabase';
import {
  ICreateTalkerRepository,
  ICreateTalkerRequested,
} from '../ICreateTalkerRepository';

export class CreateTalkerImplementation implements ICreateTalkerRepository {
  private db: ITalker[] = [];
  private newTalker: ITalker = {} as ITalker;

  constructor(private readonly database: IDatabase) {}

  async create(talker: ICreateTalkerRequested): Promise<ITalker> {
    this.db = await this.database.read();
    this.getNewTalkers(talker);
    this.add();
    this.save();
    return this.newTalker;
  }

  private add(): void {
    this.db.push(this.newTalker);
  }

  private save(): void {
    this.database.write(this.db);
  }

  private getNewTalkers(talker: ICreateTalkerRequested): void {
    this.newTalker = new Talker({
      name: talker.name,
      age: talker.age,
      id: this.db.length + 1,
      talk: {
        watchedAt: talker.talk.watchedAt,
        rate: talker.talk.rate,
      },
    });
  }
}
