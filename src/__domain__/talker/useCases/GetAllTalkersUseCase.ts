import { ITalker } from '../entities/Talker';
import { IGetAllTalkerRepository } from '../repositories/IGetAllTalkerRepository';

export class GetAllTalkersUseCase {
  constructor(private getAllTalkerRepository: IGetAllTalkerRepository) {}

  async execute(): Promise<ITalker[]> {
    return this.getAllTalkerRepository.getAll();
  }
}
