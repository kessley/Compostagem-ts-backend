// src/infrastructure/repositories/RequisicaoRepository.ts
import { PrismaClient } from '@prisma/client';
import { Requisicao } from '../../domain/entities/Requisicao';
import { IRequisicaoRepository } from '../../domain/interfaces/IRequisicaoRepository';
import { RequisicaoComInfoDTO } from '../../application/use-cases/dtos/requisicao.dto';


const prisma = new PrismaClient();

export class RequisicaoRepository implements IRequisicaoRepository {
  async create(r: Requisicao): Promise<Requisicao> {
    const rec = await prisma.requisicao.create({
      data: {
        id: r.id,
        fornecedorId: r.fornecedorId,
        produtoId: r.produtoId,
        date: r.date,
        status: r.status,
      },
    });
    return new Requisicao(rec.id, rec.fornecedorId, rec.produtoId, rec.date, rec.status);
  }

  async findById(id: string): Promise<Requisicao | null> {
    // se quiser, pode fazer o mesmo include aqui também
    const r = await prisma.requisicao.findUnique({
      where: { id },
      include: {
        fornecedor: { select: { nome: true } },
        produto:    { select: { produto: true } },
      }
    });
    if (!r) return null;
    return Object.assign(
      new Requisicao(r.id, r.fornecedorId, r.produtoId, r.date, r.status),
      { fornecedorNome: r.fornecedor.nome, produtoNome: r.produto.produto }
    );
  }

  async findAll(): Promise<RequisicaoComInfoDTO[]> {
    const recs = await prisma.requisicao.findMany({
      include: {
        fornecedor: { select: { nome: true } },
        produto:    { select: { produto: true } },
      },
    });

    return recs.map(r => ({
      id:             r.id,
      fornecedorId:   r.fornecedorId,
      produtoId:      r.produtoId,
      date:           r.date,
      status:         r.status,
      fornecedorNome: r.fornecedor.nome,
      produtoNome:    r.produto.produto,
    }));
  }

  async update(r: Requisicao): Promise<void> {
    await prisma.requisicao.update({
      where: { id: r.id },
      data: {
        date: r.date,
        status: r.status,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.requisicao.delete({ where: { id } });
  }

  async findByFornecedorId(fornecedorId: string): Promise<Requisicao[]> {
    const recs = await prisma.requisicao.findMany({ where: { fornecedorId } });
    return recs.map(r => new Requisicao(r.id, r.fornecedorId, r.produtoId, r.date, r.status));
  }
}
