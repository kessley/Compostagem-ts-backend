// src/application/use-cases/clientUseCase/create-client.use-case.ts

import { IClientRepository } from '../../../domain/interfaces/IClientRepository';
import { Client } from '../../../domain/entities/Client';
import { v4 as uuidv4 } from 'uuid';

interface CreateClientDTO {
  name: string;
  address: string;
  password: string;
  cpf: string;
}

export class CreateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute(data: CreateClientDTO): Promise<Client> {
    // Gera o id automaticamente
    const id = uuidv4();

    // Cria a entidade com o id gerado
    const client = new Client(id, data.name, data.address, data.password, data.cpf);

    await this.clientRepository.create(client);

    return client;
  }
}
