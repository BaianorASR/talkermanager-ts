import { NextFunction, Request, Response } from 'express';

import { TokenSchema } from './schemas/TokenSchema';

export function TokenValidation(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const token = request.headers.authorization;

  const { error } = TokenSchema.validate({ token });

  if (error) {
    return response.status(401).json({ message: error.message });
  }

  return next();
}
