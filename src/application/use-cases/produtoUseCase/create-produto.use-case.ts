import { IProdutoRepository } from '../../../domain/interfaces/IProdutoRepository';
import { Produto } from '../../../domain/entities/Produto';
import { v4 as uuidv4 } from 'uuid';

export interface CreateProdutoDTO {
  produto: string;
  preco: number;
  tipo: string;           // incluir tipo
}

export class CreateProdutoUseCase {
  constructor(private repo: IProdutoRepository) {}

  async execute(data: CreateProdutoDTO): Promise<Produto> {
    const id = uuidv4();
    const p = new Produto(id, data.produto, data.preco, data.tipo);
    return this.repo.create(p);
  }
}
