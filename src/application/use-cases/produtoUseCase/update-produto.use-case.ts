// src/application/use-cases/produtoUseCase/update-produto.use-case.ts
import { IProdutoRepository } from '../../../domain/interfaces/IProdutoRepository';
import { Produto } from '../../../domain/entities/Produto';

interface UpdateProdutoDTO {
  id: string;
  produto?: string;
  preco?: number;
}

export class UpdateProdutoUseCase {
  constructor(private produtoRepository: IProdutoRepository) {}

  async execute(data: UpdateProdutoDTO): Promise<Produto | null> {
    const produto = await this.produtoRepository.findById(data.id);
    if (!produto) return null;

    if (data.produto) produto.produto = data.produto;
    if (data.preco !== undefined) produto.preco = data.preco;

    await this.produtoRepository.update(produto);
    return produto;
  }
}
