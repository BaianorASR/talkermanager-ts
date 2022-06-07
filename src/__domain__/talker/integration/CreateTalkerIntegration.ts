import { CreateTalkerController } from '../controllers/CreateTalkerController';
import { Database } from '../model/database';
import { CreateTalkerImplementation } from '../repositories/implementations/CreateTalkerImplementation';
import { CreateTalkerUseCase } from '../useCases/CreateTalkerUseCase';

const database = Database.getInstance();
const createTalkerImplementation = new CreateTalkerImplementation(database);
const createTalkerUseCase = new CreateTalkerUseCase(createTalkerImplementation);
export const createTalkerController = new CreateTalkerController(createTalkerUseCase);
