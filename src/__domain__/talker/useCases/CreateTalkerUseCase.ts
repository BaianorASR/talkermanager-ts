import {
  ICreateTalkerRepository,
  ICreateTalkerRequested,
} from '../repositories/ICreateTalkerRepository';

export class CreateTalkerUseCase {
  constructor(private talkerRepository: ICreateTalkerRepository) {}

  async execute(talker: ICreateTalkerRequested): Promise<void> {
    this.talkerRepository.create(talker);
  }
}
