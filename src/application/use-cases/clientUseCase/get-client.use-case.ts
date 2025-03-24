import { IClientRepository } from '../../../domain/interfaces/IClientRepository';
import { Client } from '../../../domain/entities/Client';

export class GetClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute(id: string): Promise<Client | null> {
    return this.clientRepository.findById(id);
  }
}
