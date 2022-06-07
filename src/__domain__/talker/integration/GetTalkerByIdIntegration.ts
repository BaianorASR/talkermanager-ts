import { GetTalkerByIdController } from '../controllers/GetTalkerByIdController';
import { Database } from '../model/database';
import { GetTalkerByIdImplementation } from '../repositories/implementations/GetTalkerById';
import { GetTalkerByIdUseCase } from '../useCases/GetTalkerById';

const database = Database.getInstance();
const getTalkerByIdImplementation = new GetTalkerByIdImplementation(database);
const getTalkerByIdUseCase = new GetTalkerByIdUseCase(getTalkerByIdImplementation);
export const getTalkerByIdController = new GetTalkerByIdController(getTalkerByIdUseCase);
