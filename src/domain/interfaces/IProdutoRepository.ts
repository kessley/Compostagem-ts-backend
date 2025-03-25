// src/domain/interfaces/IProdutoRepository.ts
import { Produto } from '../entities/Produto';

export interface IProdutoRepository {
  create(produto: Produto): Promise<Produto>;
  findById(id: string): Promise<Produto | null>;
  update(produto: Produto): Promise<void>;
  delete(id: string): Promise<void>;
  findAll(): Promise<Produto[]>;
}
