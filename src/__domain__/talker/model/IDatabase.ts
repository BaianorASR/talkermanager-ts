import { ITalker } from '../entities/Talker';

export interface IDatabase {
  read(): Promise<ITalker[]>;
  write(content: ITalker[]): Promise<void>;
}
