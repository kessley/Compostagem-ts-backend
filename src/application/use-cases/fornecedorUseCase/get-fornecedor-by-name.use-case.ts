// src\application\use-cases\fornecedorUseCase\get-fornecedor-by-name.use-case.ts
import { IFornecedorRepository } from '../../../domain/interfaces/IFornecedorRepository';
import { Fornecedor } from '../../../domain/entities/Fornecedor';

export class GetFornecedorByNameUseCase {
  constructor(private repo: IFornecedorRepository) {}

  async execute(nome: string): Promise<Fornecedor | null> {
    return this.repo.findByName(nome);
  }
}
