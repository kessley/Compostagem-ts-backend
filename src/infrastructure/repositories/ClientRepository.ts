// src/infrastructure/repositories/ClientRepository.ts
import { PrismaClient } from '@prisma/client';
import { Client } from '../../domain/entities/Client';
import { IClientRepository } from '../../domain/interfaces/IClientRepository';

const prisma = new PrismaClient();

export class ClientRepository implements IClientRepository {
  async create(client: Client): Promise<Client> {
    const record = await prisma.client.create({
      data: {
        id: client.id,
        name: client.name,
        address: client.address,
        password: client.password,
        cnpj: client.cnpj,
      },
    });
    return new Client(
      record.id,
      record.name,
      record.address,
      record.password,
      record.cnpj
    );
  }

  async findById(id: string): Promise<Client | null> {
    const record = await prisma.client.findUnique({ where: { id } });
    if (!record) return null;

    return new Client(
      record.id,
      record.name,
      record.address,
      record.password,
      record.cnpj
    );
  }

  async update(client: Client): Promise<void> {
    await prisma.client.update({
      where: { id: client.id },
      data: {
        name: client.name,
        address: client.address,
        password: client.password,
        cnpj: client.cnpj,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.client.delete({ where: { id } });
  }

  async findAll(): Promise<Client[]> {
    const records = await prisma.client.findMany();
    return records.map(
      (record: { id: string; name: string; address: string; password: string; cnpj: string }) =>
        new Client(
          record.id,
          record.name,
          record.address,
          record.password,
          record.cnpj
        )
    );
  }
}
