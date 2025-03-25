// src/application/use-cases/produtoUseCase/delete-produto.use-case.ts
import { IProdutoRepository } from '../../../domain/interfaces/IProdutoRepository';

export class DeleteProdutoUseCase {
  constructor(private produtoRepository: IProdutoRepository) {}

  async execute(id: string): Promise<void> {
    await this.produtoRepository.delete(id);
  }
}
