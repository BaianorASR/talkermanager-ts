import { GetAllTalkersController } from '../controllers/GetAllTalkersController';
import { Database } from '../model/database';
import { GetAllTalkersImplementation } from '../repositories/implementations/GetAllTalkersImplementation';
import { GetAllTalkersUseCase } from '../useCases/GetAllTalkersUseCase';

const database = Database.getInstance();
const getAllTalkersImplementation = new GetAllTalkersImplementation(database);
const getAllTalkersUseCase = new GetAllTalkersUseCase(getAllTalkersImplementation);
export const getAllTalkersController = new GetAllTalkersController(getAllTalkersUseCase);
