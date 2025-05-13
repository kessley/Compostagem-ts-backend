import { IProdutoRepository } from '../../../domain/interfaces/IProdutoRepository';
import { Produto } from '../../../domain/entities/Produto';

export interface UpdateProdutoDTO {
  id: string;
  produto: string;
  preco: number;
  tipo: string;           // incluir tipo
}

export class UpdateProdutoUseCase {
  constructor(private repo: IProdutoRepository) {}

  async execute(data: UpdateProdutoDTO): Promise<Produto | null> {
    const existing = await this.repo.findById(data.id);
    if (!existing) return null;
    existing.updateData(data.produto, data.preco, data.tipo);
    await this.repo.update(existing);
    return existing;
  }
}
