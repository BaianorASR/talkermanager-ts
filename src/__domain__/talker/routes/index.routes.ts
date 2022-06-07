import { Router } from 'express';

import {
  createTalkerController,
  getAllTalkersController,
  getTalkerByIdController,
  userLoginController,
} from '../integration';
import { LoginValidation } from '../middleware/LoginValidation';
import { TokenValidation } from '../middleware/TokenValidation';

export const router = Router();

router
  .get('/talker', (request, response) => {
    getAllTalkersController.handle(request, response);
  })
  .get('/talker/:id', (request, response) => {
    getTalkerByIdController.handle(request, response);
  })
  .post('/talker', TokenValidation, (request, response) => {
    createTalkerController.handle(request, response);
  })
  .post('/login', LoginValidation, (request, response) => {
    userLoginController.handle(request, response);
  });
