// src/domain/interfaces/IOrdemPedidoRepository.ts
import { OrdemPedido } from '../entities/OrdemPedido';

export interface IOrdemPedidoRepository {
  create(ordem: OrdemPedido): Promise<OrdemPedido>;
  findById(id: string): Promise<OrdemPedido | null>;
  update(ordem: OrdemPedido): Promise<void>;
  delete(id: string): Promise<void>;
  findAll(): Promise<OrdemPedido[]>;
}
