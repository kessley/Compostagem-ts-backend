// src/application/use-cases/requisicaoUseCase/update-requisicao.use-case.ts
import { IRequisicaoRepository } from '../../../domain/interfaces/IRequisicaoRepository';
import { Requisicao, RequisicaoStatus } from '../../../domain/entities/Requisicao';

export interface UpdateRequisicaoDTO {
  id: string;
  date: Date | null;
  status: RequisicaoStatus;
}

export class UpdateRequisicaoUseCase {
  constructor(private repo: IRequisicaoRepository) {}

  async execute(data: UpdateRequisicaoDTO): Promise<Requisicao | null> {
    const existing = await this.repo.findById(data.id);
    if (!existing) return null;
    
    existing.update(data.date, data.status);
    await this.repo.update(existing);
    return existing;
  }
}
