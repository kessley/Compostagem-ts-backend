export class Admin {
    constructor(
      public readonly id: string,
      public nome: string,
      public senha: string
    ) {}
  
    updateData(name: string, password: string) {
      this.nome = name;
      this.senha = password;
    }
  }
  