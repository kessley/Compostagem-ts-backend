// src/infrastructure/factories/ClientRepositoryFactory.ts
import { IClientRepository } from '../../domain/interfaces/IClientRepository';
import { ClientRepository } from '../repositories/ClientRepository';

export class ClientRepositoryFactory {
  static create(): IClientRepository {
    return new ClientRepository();
  }
}
