// src/domain/entities/Client.ts
export class Client {
    constructor(
      public readonly id: string,
      public name: string,
      public address: string,
      public password: string,
      public cpf: string
    ) {}
  
    updateData(name: string, address: string, password: string, cpf: string) {
      this.name = name;
      this.address = address;
      this.password = password;
      this.cpf = cpf;
    }
  }
  