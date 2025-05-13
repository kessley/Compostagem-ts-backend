// src/domain/entities/Requisicao.ts
export type RequisicaoStatus = 'PENDENTE' | 'CONFIRMADO' | 'CONCLUIDO';

export class Requisicao {
  constructor(
    public readonly id: string,
    public fornecedorId: string,
    public produtoId: string,
    public date: Date | null,
    public status: RequisicaoStatus
  ) {}

  update(date: Date | null, status: RequisicaoStatus) {
    this.date = date;
    this.status = status;
  }
}
