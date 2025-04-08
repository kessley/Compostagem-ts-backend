// src/infrastructure/repositories/OrdemPedidoRepository.ts
import { PrismaClient } from '@prisma/client';
import { OrdemPedido } from '../../domain/entities/OrdemPedido';
import { IOrdemPedidoRepository } from '../../domain/interfaces/IOrdemPedidoRepository';

const prisma = new PrismaClient();

export class OrdemPedidoRepository implements IOrdemPedidoRepository {
  async create(ordem: OrdemPedido): Promise<OrdemPedido> {
    const record = await prisma.ordemPedido.create({
      data: {
        id: ordem.id,
        clientId: ordem.clientId,
        produtoId: ordem.produtoId,
        valorTotal: ordem.valorTotal,
        totalItens: ordem.totalItens,
      },
    });
    return new OrdemPedido(record.id, record.clientId, record.produtoId, record.valorTotal, record.totalItens);
  }

  async findById(id: string): Promise<OrdemPedido | null> {
    const record = await prisma.ordemPedido.findUnique({ where: { id } });
    if (!record) return null;
    return new OrdemPedido(record.id, record.clientId, record.produtoId, record.valorTotal, record.totalItens);
  }

  async update(ordem: OrdemPedido): Promise<void> {
    await prisma.ordemPedido.update({
      where: { id: ordem.id },
      data: {
        clientId: ordem.clientId,
        produtoId: ordem.produtoId,
        valorTotal: ordem.valorTotal,
        totalItens: ordem.totalItens,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.ordemPedido.delete({ where: { id } });
  }

  async findAll(): Promise<OrdemPedido[]> {
    const records = await prisma.ordemPedido.findMany();
    return records.map(
      (record) =>
        new OrdemPedido(record.id, record.clientId, record.produtoId, record.valorTotal, record.totalItens)
    );
  }
}
