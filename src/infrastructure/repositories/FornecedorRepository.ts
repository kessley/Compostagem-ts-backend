import { PrismaClient } from '@prisma/client';
import { Fornecedor } from '../../domain/entities/Fornecedor';
import { IFornecedorRepository } from '../../domain/interfaces/IFornecedorRepository';

const prisma = new PrismaClient();

export class FornecedorRepository implements IFornecedorRepository {
  async create(f: Fornecedor): Promise<Fornecedor> {
    const record = await prisma.fornecedor.create({
      data: {
        id: f.id,
        nome: f.nome,
        cnpj: f.cnpj,
        senha: f.senha,
        endereco: f.endereco,
        razaoSocial: f.razaoSocial,
        segmento: f.segmento,
      },
    });
    return new Fornecedor(
      record.id,
      record.nome,
      record.cnpj,
      record.senha,
      record.endereco,
      record.razaoSocial,
      record.segmento
    );
  }

  async findById(id: string): Promise<Fornecedor | null> {
    const rec = await prisma.fornecedor.findUnique({ where: { id } });
    if (!rec) return null;
    return new Fornecedor(
      rec.id,
      rec.nome,
      rec.cnpj,
      rec.senha,
      rec.endereco,
      rec.razaoSocial,
      rec.segmento
    );
  }

  async findAll(): Promise<Fornecedor[]> {
    const recs = await prisma.fornecedor.findMany();
    return recs.map(
      (r) =>
        new Fornecedor(
          r.id,
          r.nome,
          r.cnpj,
          r.senha,
          r.endereco,
          r.razaoSocial,
          r.segmento
        )
    );
  }

  async findByCnpj(cnpj: string): Promise<Fornecedor | null> {
    const rec = await prisma.fornecedor.findUnique({ where: { cnpj } });
    if (!rec) return null;
    return new Fornecedor(
      rec.id,
      rec.nome,
      rec.cnpj,
      rec.senha,
      rec.endereco,
      rec.razaoSocial,
      rec.segmento
    );
  }

  async update(f: Fornecedor): Promise<void> {
    await prisma.fornecedor.update({
      where: { id: f.id },
      data: {
        nome: f.nome,
        cnpj: f.cnpj,
        senha: f.senha,
        endereco: f.endereco,
        razaoSocial: f.razaoSocial,
        segmento: f.segmento,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.fornecedor.delete({ where: { id } });
  }
}
