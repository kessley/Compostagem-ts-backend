// src/application/use-cases/ordemPedidoUseCase/get-ordem-pedidos-by-client.use-case.ts
import { IOrdemPedidoRepository } from '../../../domain/interfaces/IOrdemPedidoRepository';
import { OrdemPedido } from '../../../domain/entities/OrdemPedido';

export class GetOrdersByClientUseCase {
  constructor(private ordemPedidoRepository: IOrdemPedidoRepository) {}

  async execute(clientId: string): Promise<OrdemPedido[]> {
    // Se o repositório não tiver um método dedicado para buscar por client,
    // podemos buscar todas as ordens e filtrar.
    const orders = await this.ordemPedidoRepository.findAll();
    return orders.filter(order => order.clientId === clientId);
  }
}
