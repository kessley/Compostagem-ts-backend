export class Admin {
    constructor(
      public readonly id: string,
      public name: string,
      public password: string
    ) {}
  
    updateData(name: string, password: string) {
      this.name = name;
      this.password = password;
    }
  }
  