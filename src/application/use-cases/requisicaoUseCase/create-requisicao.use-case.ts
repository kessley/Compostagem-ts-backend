// src/application/use-cases/requisicaoUseCase/create-requisicao.use-case.ts
import { IRequisicaoRepository } from '../../../domain/interfaces/IRequisicaoRepository';
import { Requisicao, RequisicaoStatus } from '../../../domain/entities/Requisicao';
import { v4 as uuidv4 } from 'uuid';

export interface CreateRequisicaoDTO {
  fornecedorId: string;
  produtoId: string;
  date: Date;
}

export class CreateRequisicaoUseCase {
  constructor(private repo: IRequisicaoRepository) {}

  async execute(data: CreateRequisicaoDTO): Promise<Requisicao> {
    const id = uuidv4();
    const requisicao = new Requisicao(
      id,
      data.fornecedorId,
      data.produtoId,
      data.date,
      'PENDENTE'  // status inicial
    );
    return await this.repo.create(requisicao);
  }
}
