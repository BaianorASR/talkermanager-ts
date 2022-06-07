import { NextFunction, Request, Response } from 'express';

import { LoginScheme } from './schemas/LoginScheme';

export function LoginValidation(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { email, password } = request.body;
  const { error } = LoginScheme.validate({ email, password });
  if (error) {
    return response.status(400).json({ message: error.message });
  }
  return next();
}
