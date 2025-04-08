// src/domain/interfaces/IClientRepository.ts
import { Client } from '../entities/Client';

export interface IClientRepository {
  create(client: Client): Promise<Client>;
  findById(id: string): Promise<Client | null>;
  update(client: Client): Promise<void>;
  delete(id: string): Promise<void>;
  findAll(): Promise<Client[]>;
  findByName(name: string): Promise<Client | null>;
}
