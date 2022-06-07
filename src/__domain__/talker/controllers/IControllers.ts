import { Request, Response } from 'express';

export interface IControllers {
  handle(request: Request, response: Response): any;
}
