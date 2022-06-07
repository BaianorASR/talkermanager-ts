import { ITalker } from '../entities/Talker';

export interface IGetTalkerByIdRepository {
  getById(id: number): Promise<ITalker | undefined>;
}
