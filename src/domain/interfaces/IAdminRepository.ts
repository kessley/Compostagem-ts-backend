import { Admin } from '../entities/Admin';

export interface IAdminRepository {
  create(admin: Admin): Promise<Admin>;
  findById(id: string): Promise<Admin | null>;
  findByName(nome: string): Promise<Admin | null>;
  findAll(): Promise<Admin[]>;
  update(admin: Admin): Promise<void>;
  delete(id: string): Promise<void>;
}
