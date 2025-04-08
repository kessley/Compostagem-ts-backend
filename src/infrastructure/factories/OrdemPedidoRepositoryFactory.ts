// src/infrastructure/factories/OrdemPedidoRepositoryFactory.ts
import { IOrdemPedidoRepository } from '../../domain/interfaces/IOrdemPedidoRepository';
import { OrdemPedidoRepository } from '../repositories/OrdemPedidoRepository';

export class OrdemPedidoRepositoryFactory {
  static create(): IOrdemPedidoRepository {
    return new OrdemPedidoRepository();
  }
}
