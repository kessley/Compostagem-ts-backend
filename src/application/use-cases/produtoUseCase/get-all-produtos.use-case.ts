// src/application/use-cases/produtoUseCase/get-all-produtos.use-case.ts
import { IProdutoRepository } from '../../../domain/interfaces/IProdutoRepository';
import { Produto } from '../../../domain/entities/Produto';

export class GetAllProdutosUseCase {
  constructor(private produtoRepository: IProdutoRepository) {}

  async execute(): Promise<Produto[]> {
    return this.produtoRepository.findAll();
  }
}
