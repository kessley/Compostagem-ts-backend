// src/domain/entities/Produto.ts
export class Produto {
    constructor(
      public readonly id: string,
      public produto: string,
      public preco: number
    ) {}
  
    updateData(produto: string, preco: number): void {
      this.produto = produto;
      this.preco = preco;
    }
  }
  