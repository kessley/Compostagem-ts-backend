import { PrismaClient } from '@prisma/client';
import { Produto } from '../../domain/entities/Produto';
import { IProdutoRepository } from '../../domain/interfaces/IProdutoRepository';

const prisma = new PrismaClient();

export class ProdutoRepository implements IProdutoRepository {
  async create(p: Produto): Promise<Produto> {
    const record = await prisma.produto.create({
      data: {
        id: p.id,
        produto: p.produto,
        preco: p.preco,
        tipo: p.tipo,           // grava tipo
      },
    });
    return new Produto(record.id, record.produto, record.preco, record.tipo);
  }

  async findById(id: string): Promise<Produto | null> {
    const record = await prisma.produto.findUnique({ where: { id } });
    if (!record) return null;
    return new Produto(record.id, record.produto, record.preco, record.tipo);
  }

  async findAll(): Promise<Produto[]> {
    const records = await prisma.produto.findMany();
    return records.map(r => new Produto(r.id, r.produto, r.preco, r.tipo));
  }

  async update(p: Produto): Promise<void> {
    await prisma.produto.update({
      where: { id: p.id },
      data: {
        produto: p.produto,
        preco: p.preco,
        tipo: p.tipo,           // atualiza tipo
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.produto.delete({ where: { id } });
  }
}
