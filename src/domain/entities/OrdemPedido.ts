// src/domain/entities/OrdemPedido.ts
export class OrdemPedido {
    constructor(
      public readonly id: string,
      public clientId: string,
      public produtoId: string,
      public valorTotal: number,
      public totalItens: number
    ) {}
  
    // Método para atualizar os dados do pedido, se necessário
    updateData(clientId: string, produtoId: string, valorTotal: number, totalItens: number): void {
      this.clientId = clientId;
      this.produtoId = produtoId;
      this.valorTotal = valorTotal;
      this.totalItens = totalItens;
    }
  }
  