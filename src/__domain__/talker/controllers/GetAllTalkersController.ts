import { Request, Response } from 'express';

import { GetAllTalkersUseCase } from '../useCases/GetAllTalkersUseCase';
import { IControllers } from './IControllers';

export class GetAllTalkersController implements IControllers {
  constructor(private getAllTalkerUseCase: GetAllTalkersUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const talkers = await this.getAllTalkerUseCase.execute();
      return response.status(200).json(talkers);
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao buscar os palestrantes' });
    }
  }
}
