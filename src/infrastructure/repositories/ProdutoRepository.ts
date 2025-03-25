// src/infrastructure/repositories/ProdutoRepository.ts
import { PrismaClient } from '@prisma/client';
import { Produto } from '../../domain/entities/Produto';
import { IProdutoRepository } from '../../domain/interfaces/IProdutoRepository';

const prisma = new PrismaClient();

export class ProdutoRepository implements IProdutoRepository {
  async create(produto: Produto): Promise<Produto> {
    const record = await prisma.produto.create({
      data: {
        id: produto.id,
        produto: produto.produto,
        preco: produto.preco,
      },
    });
    return new Produto(record.id, record.produto, record.preco);
  }

  async findById(id: string): Promise<Produto | null> {
    const record = await prisma.produto.findUnique({ where: { id } });
    if (!record) return null;
    return new Produto(record.id, record.produto, record.preco);
  }

  async update(produto: Produto): Promise<void> {
    await prisma.produto.update({
      where: { id: produto.id },
      data: {
        produto: produto.produto,
        preco: produto.preco,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.produto.delete({ where: { id } });
  }

  async findAll(): Promise<Produto[]> {
    const records = await prisma.produto.findMany();
    return records.map(record => new Produto(record.id, record.produto, record.preco));
  }
}
