import { IAdminRepository } from '../../../domain/interfaces/IAdminRepository';
import { Admin } from '../../../domain/entities/Admin';

export class GetAllAdminsUseCase {
  constructor(private repo: IAdminRepository) {}

  async execute(): Promise<Admin[]> {
    return await this.repo.findAll();
  }
}
