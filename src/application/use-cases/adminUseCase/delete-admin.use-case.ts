import { IAdminRepository } from '../../../domain/interfaces/IAdminRepository';

export class DeleteAdminUseCase {
  constructor(private repo: IAdminRepository) {}

  async execute(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
