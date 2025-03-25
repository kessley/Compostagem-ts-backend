// src/application/use-cases/produtoUseCase/get-produto.use-case.ts
import { IProdutoRepository } from '../../../domain/interfaces/IProdutoRepository';
import { Produto } from '../../../domain/entities/Produto';

export class GetProdutoUseCase {
  constructor(private produtoRepository: IProdutoRepository) {}

  async execute(id: string): Promise<Produto | null> {
    return this.produtoRepository.findById(id);
  }
}
