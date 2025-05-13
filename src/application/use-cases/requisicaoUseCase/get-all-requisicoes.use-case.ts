// src/application/use-cases/requisicaoUseCase/get-all-requisicoes.use-case.ts
import { IRequisicaoRepository } from '../../../domain/interfaces/IRequisicaoRepository';
import { Requisicao } from '../../../domain/entities/Requisicao';

export class GetAllRequisicoesUseCase {
  constructor(private repo: IRequisicaoRepository) {}

  async execute(): Promise<Requisicao[]> {
    return await this.repo.findAll();
  }
}
