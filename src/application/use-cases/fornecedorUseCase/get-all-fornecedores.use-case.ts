import { IFornecedorRepository } from '../../../domain/interfaces/IFornecedorRepository';
import { Fornecedor } from '../../../domain/entities/Fornecedor';

export class GetAllFornecedoresUseCase {
  constructor(private repo: IFornecedorRepository) {}

  async execute(): Promise<Fornecedor[]> {
    return await this.repo.findAll();
  }
}
