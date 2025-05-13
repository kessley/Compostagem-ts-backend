// src/infrastructure/factories/RequisicaoRepositoryFactory.ts
import { RequisicaoRepository } from '../repositories/RequisicaoRepository';

export class RequisicaoRepositoryFactory {
  static create() {
    return new RequisicaoRepository();
  }
}
