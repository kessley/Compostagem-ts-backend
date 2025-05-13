import { IFornecedorRepository } from '../../../domain/interfaces/IFornecedorRepository';
import { Fornecedor } from '../../../domain/entities/Fornecedor';

export class GetFornecedorUseCase {
  constructor(private repo: IFornecedorRepository) {}

  async execute(id: string): Promise<Fornecedor | null> {
    return await this.repo.findById(id);
  }
}
