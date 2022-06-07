import { ITalker } from '../entities/Talker';

export interface IGetAllTalkerRepository {
  getAll(): Promise<ITalker[]>;
}
