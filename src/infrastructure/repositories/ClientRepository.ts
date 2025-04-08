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
        cpf: client.cpf,
      },
    });
    return new Client(
      record.id,
      record.name,
      record.address,
      record.password,
      record.cpf
    );
  }
  async findByName(name: string): Promise<Client | null> {
    const record = await prisma.client.findFirst({
      where: { name },
    });
    if (!record) return null;
    return new Client(
      record.id,
      record.name,
      record.address,
      record.password,
      record.cpf
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
      record.cpf
    );
  }

  async update(client: Client): Promise<void> {
    await prisma.client.update({
      where: { id: client.id },
      data: {
        name: client.name,
        address: client.address,
        password: client.password,
        cpf: client.cpf,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.client.delete({ where: { id } });
  }

  async findAll(): Promise<Client[]> {
    const records = await prisma.client.findMany();
    return records.map(
      (record: { id: string; name: string; address: string; password: string; cpf: string }) =>
        new Client(
          record.id,
          record.name,
          record.address,
          record.password,
          record.cpf
        )
    );

    
  }
  
}
