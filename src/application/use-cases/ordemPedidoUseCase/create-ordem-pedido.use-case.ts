// src/application/use-cases/ordemPedidoUseCase/create-ordem-pedido.use-case.ts
import { IOrdemPedidoRepository } from '../../../domain/interfaces/IOrdemPedidoRepository';
import { OrdemPedido } from '../../../domain/entities/OrdemPedido';
import { v4 as uuidv4 } from 'uuid';

interface CreateOrdemPedidoDTO {
  clientId: string;
  produtoId: string;
  valorTotal: number;
  totalItens: number;
}

export class CreateOrdemPedidoUseCase {
  constructor(private ordemPedidoRepository: IOrdemPedidoRepository) {}

  async execute(data: CreateOrdemPedidoDTO): Promise<OrdemPedido> {
    const id = uuidv4();
    const ordem = new OrdemPedido(id, data.clientId, data.produtoId, data.valorTotal, data.totalItens);
    await this.ordemPedidoRepository.create(ordem);
    return ordem;
  }
}
