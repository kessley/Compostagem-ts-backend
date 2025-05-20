import { IClientRepository } from '../../../domain/interfaces/IClientRepository';
import { Client } from '../../../domain/entities/Client';

interface UpdateClientDTO {
  id: string;
  nome?: string;
  endereco?: string;
  senha?: string;
  cpf?: string;
}

export class UpdateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute(data: UpdateClientDTO): Promise<Client | null> {
    const client = await this.clientRepository.findById(data.id);
    if (!client) {
      return null;
    }
    
    // Atualiza os campos se fornecidos
    if (data.nome) client.nome = data.nome;
    if (data.endereco) client.endereco = data.endereco;
    if (data.senha) client.senha = data.senha;
    if (data.cpf) client.cpf = data.cpf;

    await this.clientRepository.update(client);
    return client;
  }
}
