import { IClientRepository } from '../../../domain/interfaces/IClientRepository';

export class DeleteClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute(id: string): Promise<void> {
    await this.clientRepository.delete(id);
  }
}
