// src/application/use-cases/ordemPedidoUseCase/update-ordem-pedido.use-case.ts
import { IOrdemPedidoRepository } from '../../../domain/interfaces/IOrdemPedidoRepository';
import { OrdemPedido } from '../../../domain/entities/OrdemPedido';

interface UpdateOrdemPedidoDTO {
  id: string;
  clientId?: string;
  produtoId?: string;
  valorTotal?: number;
  totalItens?: number;
}

export class UpdateOrdemPedidoUseCase {
  constructor(private ordemPedidoRepository: IOrdemPedidoRepository) {}

  async execute(data: UpdateOrdemPedidoDTO): Promise<OrdemPedido | null> {
    const ordem = await this.ordemPedidoRepository.findById(data.id);
    if (!ordem) return null;

    if (data.clientId) ordem.clientId = data.clientId;
    if (data.produtoId) ordem.produtoId = data.produtoId;
    if (data.valorTotal !== undefined) ordem.valorTotal = data.valorTotal;
    if (data.totalItens !== undefined) ordem.totalItens = data.totalItens;

    await this.ordemPedidoRepository.update(ordem);
    return ordem;
  }
}
