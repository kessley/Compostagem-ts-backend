// src/domain/interfaces/IRequisicaoRepository.ts
import { RequisicaoComInfoDTO } from '../../application/use-cases/dtos/requisicao.dto';
import { Requisicao, RequisicaoStatus } from '../entities/Requisicao';

export interface IRequisicaoRepository {
  create(r: Requisicao): Promise<Requisicao>;
  findById(id: string): Promise<Requisicao | null>;
  findAll(): Promise<RequisicaoComInfoDTO[]>;
  update(r: Requisicao): Promise<void>;
  delete(id: string): Promise<void>;
  findByFornecedorId(fornecedorId: string): Promise<Requisicao[]>;
}
