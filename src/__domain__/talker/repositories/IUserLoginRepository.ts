export interface IUserLoginRepository {
  getToken(): Promise<string>;
}
