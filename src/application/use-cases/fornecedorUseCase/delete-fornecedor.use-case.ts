import { IFornecedorRepository } from '../../../domain/interfaces/IFornecedorRepository';

export class DeleteFornecedorUseCase {
  constructor(private repo: IFornecedorRepository) {}

  async execute(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
