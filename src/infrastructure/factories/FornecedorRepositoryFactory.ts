import { FornecedorRepository } from '../repositories/FornecedorRepository';

export class FornecedorRepositoryFactory {
  static create() {
    return new FornecedorRepository();
  }
}
