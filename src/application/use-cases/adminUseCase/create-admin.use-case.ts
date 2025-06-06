import { IAdminRepository } from '../../../domain/interfaces/IAdminRepository';
import { Admin } from '../../../domain/entities/Admin';
import { v4 as uuidv4 } from 'uuid';

export interface CreateAdminDTO {
  nome: string;
  senha: string;
}

export class CreateAdminUseCase {
  constructor(private repo: IAdminRepository) {}

  async execute(data: CreateAdminDTO): Promise<Admin> {
    const admin = new Admin(uuidv4(), data.nome, data.senha);
    return await this.repo.create(admin);
  }
}
