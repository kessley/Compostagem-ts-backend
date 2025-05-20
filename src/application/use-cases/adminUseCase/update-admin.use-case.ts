import { IAdminRepository } from '../../../domain/interfaces/IAdminRepository';
import { Admin } from '../../../domain/entities/Admin';

export interface UpdateAdminDTO {
  id: string;
  nome: string;
  senha: string;
}

export class UpdateAdminUseCase {
  constructor(private repo: IAdminRepository) {}

  async execute(data: UpdateAdminDTO): Promise<Admin | null> {
    const existing = await this.repo.findById(data.id);
    if (!existing) return null;
    existing.updateData(data.nome, data.senha);
    await this.repo.update(existing);
    return existing;
  }
}
