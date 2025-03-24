// src/domain/entities/Client.ts
export class Client {
    constructor(
      public readonly id: string,
      public name: string,
      public address: string,
      public password: string,
      public cnpj: string
    ) {}
  
    // Exemplo de método de domínio
    updateData(name: string, address: string, password: string, cnpj: string) {
      this.name = name;
      this.address = address;
      this.password = password;
      this.cnpj = cnpj;
    }
  }
  