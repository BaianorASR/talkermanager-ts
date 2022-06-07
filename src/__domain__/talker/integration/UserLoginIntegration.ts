import { UserLoginController } from '../controllers/UserLoginController';
import { UserLoginImplementation } from '../repositories/implementations/UserLoginImplementation';
import { UserLoginUseCase } from '../useCases/UserLoginUseCase';

const userLoginImplementation = new UserLoginImplementation();
const userLoginUseCase = new UserLoginUseCase(userLoginImplementation);
export const userLoginController = new UserLoginController(userLoginUseCase);
