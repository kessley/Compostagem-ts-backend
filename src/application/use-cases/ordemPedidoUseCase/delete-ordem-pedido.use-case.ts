// src/application/use-cases/ordemPedidoUseCase/delete-ordem-pedido.use-case.ts
import { IOrdemPedidoRepository } from '../../../domain/interfaces/IOrdemPedidoRepository';

export class DeleteOrdemPedidoUseCase {
  constructor(private ordemPedidoRepository: IOrdemPedidoRepository) {}

  async execute(id: string): Promise<void> {
    await this.ordemPedidoRepository.delete(id);
  }
}
