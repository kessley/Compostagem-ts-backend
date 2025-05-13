import { Produto } from '../entities/Produto';

export interface IProdutoRepository {
  create(p: Produto): Promise<Produto>;
  findById(id: string): Promise<Produto | null>;
  findAll(): Promise<Produto[]>;
  update(p: Produto): Promise<void>;
  delete(id: string): Promise<void>;
  // (se precisar) findByTipo(tipo: string): Promise<Produto[]>;
}
