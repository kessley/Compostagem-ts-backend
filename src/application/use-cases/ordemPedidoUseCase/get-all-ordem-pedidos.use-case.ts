// src/application/use-cases/ordemPedidoUseCase/get-all-ordem-pedidos.use-case.ts
import { IOrdemPedidoRepository } from '../../../domain/interfaces/IOrdemPedidoRepository';
import { OrdemPedido } from '../../../domain/entities/OrdemPedido';

export class GetAllOrdemPedidosUseCase {
  constructor(private ordemPedidoRepository: IOrdemPedidoRepository) {}

  async execute(): Promise<OrdemPedido[]> {
    return this.ordemPedidoRepository.findAll();
  }
}
