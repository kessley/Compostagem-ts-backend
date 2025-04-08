// src/application/use-cases/ordemPedidoUseCase/get-ordem-pedido.use-case.ts
import { IOrdemPedidoRepository } from '../../../domain/interfaces/IOrdemPedidoRepository';
import { OrdemPedido } from '../../../domain/entities/OrdemPedido';

export class GetOrdemPedidoUseCase {
  constructor(private ordemPedidoRepository: IOrdemPedidoRepository) {}

  async execute(id: string): Promise<OrdemPedido | null> {
    return this.ordemPedidoRepository.findById(id);
  }
}
