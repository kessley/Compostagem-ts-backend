import { IFornecedorRepository } from '../../../domain/interfaces/IFornecedorRepository';
import { Fornecedor } from '../../../domain/entities/Fornecedor';
import { v4 as uuidv4 } from 'uuid';

interface CreateFornecedorDTO {
  nome: string;
  cnpj: string;
  senha: string;
  endereco: string;
  razaoSocial: string;
  segmento: string;
}

export class CreateFornecedorUseCase {
  constructor(private repo: IFornecedorRepository) {}

  async execute(data: CreateFornecedorDTO): Promise<Fornecedor> {
    const id = uuidv4();
    const forn = new Fornecedor(
      id,
      data.nome,
      data.cnpj,
      data.senha,
      data.endereco,
      data.razaoSocial,
      data.segmento
    );
    return await this.repo.create(forn);
  }
}
