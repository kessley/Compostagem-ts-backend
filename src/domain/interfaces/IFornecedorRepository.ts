import { Fornecedor } from '../entities/Fornecedor';

export interface IFornecedorRepository {
  create(f: Fornecedor): Promise<Fornecedor>;
  findById(id: string): Promise<Fornecedor | null>;
  findAll(): Promise<Fornecedor[]>;
  findByCnpj(cnpj: string): Promise<Fornecedor | null>;
  update(f: Fornecedor): Promise<void>;
  delete(id: string): Promise<void>;
  findByName(nome: string): Promise<Fornecedor | null>;
}
