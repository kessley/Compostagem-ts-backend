export class Produto {
  constructor(
    public readonly id: string,
    public produto: string,
    public preco: number,
    public tipo: string       // novo atributo
  ) {}

  updateData(produto: string, preco: number, tipo: string) {
    this.produto = produto;
    this.preco = preco;
    this.tipo = tipo;        // atualiza tipo também
  }
}
