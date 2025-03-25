// src/infrastructure/factories/ProdutoRepositoryFactory.ts
import { IProdutoRepository } from '../../domain/interfaces/IProdutoRepository';
import { ProdutoRepository } from '../repositories/ProdutoRepository';

export class ProdutoRepositoryFactory {
  static create(): IProdutoRepository {
    return new ProdutoRepository();
  }
}
