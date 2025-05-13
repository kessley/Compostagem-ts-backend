import { AdminRepository } from '../repositories/AdminRepository';

export class AdminRepositoryFactory {
  static create() {
    return new AdminRepository();
  }
}
