import { nanoid } from 'nanoid';

import { IUserLoginRepository } from '../IUserLoginRepository';

export class UserLoginImplementation implements IUserLoginRepository {
  public async getToken(): Promise<string> {
    return nanoid(16);
  }
}
