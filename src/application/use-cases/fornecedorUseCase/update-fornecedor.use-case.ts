import { IFornecedorRepository } from '../../../domain/interfaces/IFornecedorRepository';
import { Fornecedor } from '../../../domain/entities/Fornecedor';

interface UpdateFornecedorDTO {
  id: string;
  nome: string;
  cnpj: string;
  senha: string;
  endereco: string;
  razaoSocial: string;
  segmento: string;
}

export class UpdateFornecedorUseCase {
  constructor(private repo: IFornecedorRepository) {}

  async execute(data: UpdateFornecedorDTO): Promise<Fornecedor | null> {
    const existing = await this.repo.findById(data.id);
    if (!existing) return null;
    existing.updateData(
      data.nome,
      data.cnpj,
      data.senha,
      data.endereco,
      data.razaoSocial,
      data.segmento
    );
    await this.repo.update(existing);
    return existing;
  }
}
