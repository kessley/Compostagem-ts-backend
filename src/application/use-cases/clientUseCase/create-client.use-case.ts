// src/application/use-cases/clientUseCase/create-client.use-case.ts
import { IClientRepository } from '../../../domain/interfaces/IClientRepository';
import { Client } from '../../../domain/entities/Client';

interface CreateClientDTO {
  id: string;
  name: string;
  address: string;
  password: string;
  cnpj: string;
}

export class CreateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute(data: CreateClientDTO): Promise<Client> {
    // Aqui podemos incluir validações de negócio antes de criar a entidade
    const client = new Client(
      data.id,
      data.name,
      data.address,
      data.password,
      data.cnpj
    );

    // Persistindo o novo cliente via repositório
    await this.clientRepository.create(client);

    return client;
  }
}
