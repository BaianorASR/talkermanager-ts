import { ITalker } from '../entities/Talker';

export interface ICreateTalkerRequested {
  name: string;
  age: number;
  talk: {
    watchedAt: string;
    rate: number;
  };
}

export interface ICreateTalkerRepository {
  create(talker: ICreateTalkerRequested): Promise<ITalker>;
}
