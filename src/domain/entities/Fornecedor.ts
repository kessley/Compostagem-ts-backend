export class Fornecedor {
    constructor(
      public readonly id: string,
      public nome: string,
      public cnpj: string,
      public senha: string,
      public endereco: string,
      public razaoSocial: string,
      public segmento: string
    ) {}
  
    updateData(
      nome: string,
      cnpj: string,
      senha: string,
      endereco: string,
      razaoSocial: string,
      segmento: string
    ) {
      this.nome = nome;
      this.cnpj = cnpj;
      this.senha = senha;
      this.endereco = endereco;
      this.razaoSocial = razaoSocial;
      this.segmento = segmento;
    }
  }
  