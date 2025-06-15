// src/application/dtos/requisicao.dto.ts

import { RequisicaoStatus } from "../../../domain/entities/Requisicao";

export interface RequisicaoComInfoDTO {
  id: string;
  fornecedorId: string;
  produtoId: string;
  date: Date | null;
  status: RequisicaoStatus;
  fornecedorNome: string;
  produtoNome: string;
}
