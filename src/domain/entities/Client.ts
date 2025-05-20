// src/domain/entities/Client.ts
export class Client {
    constructor(
      public readonly id: string,
      public nome: string,
      public endereco: string,
      public senha: string,
      public cpf: string
    ) {}
  
    updateData(name: string, address: string, password: string, cpf: string) {
      this.nome = name;
      this.endereco = address;
      this.senha = password;
      this.cpf = cpf;
    }
  }
  