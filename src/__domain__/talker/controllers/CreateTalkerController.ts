import { Request, Response } from 'express';

import { AppError } from '../../../errors/AppError';
import { ICreateTalkerRequested } from '../repositories/ICreateTalkerRepository';
import { CreateTalkerUseCase } from '../useCases/CreateTalkerUseCase';
import { IControllers } from './IControllers';

export class CreateTalkerController implements IControllers {
  constructor(private readonly createTalkerUseCase: CreateTalkerUseCase) {}

  handle(request: Request, response: Response) {
    try {
      const talker = this.getTalkerOfBody(request);
      const newTalker = this.createTalkerUseCase.execute(talker);

      return response.status(201).json(newTalker);
    } catch (e) {
      const error = new AppError(e);
      return response.status(400).send(error.message);
    }
  }

  private getTalkerOfBody(request: Request): ICreateTalkerRequested {
    return {
      name: request.body.name,
      age: request.body.age,
      talk: {
        watchedAt: request.body.talk.watchedAt,
        rate: request.body.talk.rate,
      },
    };
  }
}
