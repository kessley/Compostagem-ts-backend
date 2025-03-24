import { IClientRepository } from '../../../domain/interfaces/IClientRepository';
import { Client } from '../../../domain/entities/Client';

interface UpdateClientDTO {
  id: string;
  name?: string;
  address?: string;
  password?: string;
  cnpj?: string;
}

export class UpdateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute(data: UpdateClientDTO): Promise<Client | null> {
    const client = await this.clientRepository.findById(data.id);
    if (!client) {
      return null;
    }
    
    // Atualiza os campos se fornecidos
    if (data.name) client.name = data.name;
    if (data.address) client.address = data.address;
    if (data.password) client.password = data.password;
    if (data.cnpj) client.cnpj = data.cnpj;

    await this.clientRepository.update(client);
    return client;
  }
}
