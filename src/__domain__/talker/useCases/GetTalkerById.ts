import { ITalker } from '../entities/Talker';
import { IGetTalkerByIdRepository } from '../repositories/IGetTalkerByIdRepository';

export class GetTalkerByIdUseCase {
  constructor(private talkerRepository: IGetTalkerByIdRepository) {}

  async execute(id: number): Promise<ITalker> {
    const talker = await this.talkerRepository.getById(id);

    if (!talker) {
      throw new Error('Talker not found');
    }

    return talker;
  }
}
