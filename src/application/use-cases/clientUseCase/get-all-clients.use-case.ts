import { IClientRepository } from '../../../domain/interfaces/IClientRepository';
import { Client } from '../../../domain/entities/Client';

export class GetAllClientsUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute(): Promise<Client[]> {
    return this.clientRepository.findAll();
  }
}
