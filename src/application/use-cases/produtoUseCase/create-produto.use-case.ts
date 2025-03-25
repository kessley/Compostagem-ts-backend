// src/application/use-cases/produtoUseCase/create-produto.use-case.ts
import { IProdutoRepository } from '../../../domain/interfaces/IProdutoRepository';
import { Produto } from '../../../domain/entities/Produto';
import { v4 as uuidv4 } from 'uuid';

interface CreateProdutoDTO {
  produto: string;
  preco: number;
}

export class CreateProdutoUseCase {
  constructor(private produtoRepository: IProdutoRepository) {}

  async execute(data: CreateProdutoDTO): Promise<Produto> {
    const id = uuidv4();
    const produto = new Produto(id, data.produto, data.preco);
    await this.produtoRepository.create(produto);
    return produto;
  }
}
