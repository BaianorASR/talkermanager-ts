import { Request, Response } from 'express';

import { UserLoginUseCase } from '../useCases/UserLoginUseCase';

export class UserLoginController {
  constructor(private readonly userLoginUseCase: UserLoginUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const token = await this.userLoginUseCase.execute();
      return response.status(200).json({ token });
    } catch (error) {
      return response.status(404).json({ message: 'Erro ao tentar cadastrar usuário' });
    }
  }
}
