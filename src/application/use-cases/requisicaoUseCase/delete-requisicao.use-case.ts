// src/application/use-cases/requisicaoUseCase/delete-requisicao.use-case.ts
import { IRequisicaoRepository } from '../../../domain/interfaces/IRequisicaoRepository';

export class DeleteRequisicaoUseCase {
  constructor(private repo: IRequisicaoRepository) {}

  async execute(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
