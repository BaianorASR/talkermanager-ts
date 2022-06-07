import { NextFunction, Request, Response } from 'express';

import { TalkerScheme } from './schemas/TalkerSchema';

export function TokenValidation(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { name, age, talk } = request.body;

  const { error } = TalkerScheme.validate({ name, age, talk });

  if (error) {
    return response.status(400).json({ message: error.message });
  }

  return next();
}
