import { Request, Response } from 'express';

import { GetTalkerByIdUseCase } from '../useCases/GetTalkerById';
import { IControllers } from './IControllers';

export class GetTalkerByIdController implements IControllers {
  constructor(private getTalkerByIdUseCase: GetTalkerByIdUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const talker = await this.getTalkerByIdUseCase.execute(+request.params.id);
      return response.status(200).json(talker);
    } catch (error) {
      return response.status(500).json({ message: 'Erro ao buscar o palestrante' });
    }
  }
}
