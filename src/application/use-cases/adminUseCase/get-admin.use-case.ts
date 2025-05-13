import { IAdminRepository } from '../../../domain/interfaces/IAdminRepository';
import { Admin } from '../../../domain/entities/Admin';

export class GetAdminUseCase {
  constructor(private repo: IAdminRepository) {}

  async execute(id: string): Promise<Admin | null> {
    return await this.repo.findById(id);
  }
}
