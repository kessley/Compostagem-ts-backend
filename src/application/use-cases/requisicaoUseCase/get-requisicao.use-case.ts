// src/application/use-cases/requisicaoUseCase/get-requisicao.use-case.ts
import { IRequisicaoRepository } from '../../../domain/interfaces/IRequisicaoRepository';
import { Requisicao } from '../../../domain/entities/Requisicao';

export class GetRequisicaoUseCase {
  constructor(private repo: IRequisicaoRepository) {}

  async execute(id: string): Promise<Requisicao | null> {
    return await this.repo.findById(id);
  }
}
