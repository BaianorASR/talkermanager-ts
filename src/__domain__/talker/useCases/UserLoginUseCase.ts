import { IUserLoginRepository } from '../repositories/IUserLoginRepository';

export class UserLoginUseCase {
  constructor(private readonly userLoginRepository: IUserLoginRepository) {}

  public async execute(): Promise<string> {
    const token = await this.userLoginRepository.getToken();
    return token;
  }
}
