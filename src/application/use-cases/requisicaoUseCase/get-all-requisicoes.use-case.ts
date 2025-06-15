// src/application/use-cases/requisicaoUseCase/get-all-requisicoes.use-case.ts
import { IRequisicaoRepository } from '../../../domain/interfaces/IRequisicaoRepository';
import { RequisicaoComInfoDTO }    from '../dtos/requisicao.dto';

export class GetAllRequisicoesUseCase {
  constructor(private repo: IRequisicaoRepository) {}

  async execute(): Promise<RequisicaoComInfoDTO[]> {
    return this.repo.findAll();
  }
}