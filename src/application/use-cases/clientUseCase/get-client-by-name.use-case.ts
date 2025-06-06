// src/application/use-cases/clientUseCase/get-client-by-name.use-case.ts
import { IClientRepository } from '../../../domain/interfaces/IClientRepository';
import { Client } from '../../../domain/entities/Client';

export class GetClientByNameUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute(nome: string): Promise<Client | null> {
    const client = await this.clientRepository.findByName(nome);
    return client;
  }
}
