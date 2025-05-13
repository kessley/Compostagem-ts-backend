// src/infrastructure/repositories/AdminRepository.ts
import { PrismaClient } from '@prisma/client';
import { Admin } from '../../domain/entities/Admin';
import { IAdminRepository } from '../../domain/interfaces/IAdminRepository';

const prisma = new PrismaClient();

export class AdminRepository implements IAdminRepository {
  async create(admin: Admin): Promise<Admin> {
    const record = await prisma.admin.create({
      data: {
        id: admin.id,
        name: admin.name,
        password: admin.password,
      },
    });
    return new Admin(record.id, record.name, record.password);
  }

  async findByName(name: string): Promise<Admin | null> {
    const record = await prisma.admin.findUnique({
      where: { name },
    });
    if (!record) return null;
    return new Admin(record.id, record.name, record.password);
  }

  async findById(id: string): Promise<Admin | null> {
    const record = await prisma.admin.findUnique({ where: { id } });
    if (!record) return null;
    return new Admin(record.id, record.name, record.password);
  }

  async update(admin: Admin): Promise<void> {
    await prisma.admin.update({
      where: { id: admin.id },
      data: {
        name: admin.name,
        password: admin.password,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.admin.delete({ where: { id } });
  }

  async findAll(): Promise<Admin[]> {
    const records = await prisma.admin.findMany();
    return records.map(record =>
      new Admin(record.id, record.name, record.password)
    );
  }
}
