import { IAdminRepository } from '../../../domain/interfaces/IAdminRepository';
import { Admin } from '../../../domain/entities/Admin';

export class GetAdminByNameUseCase {
  constructor(private repo: IAdminRepository) {}

  async execute(nome: string): Promise<Admin | null> {
    return await this.repo.findByName(nome);
  }
}
