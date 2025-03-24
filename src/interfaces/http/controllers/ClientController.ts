import { Request, Response, NextFunction } from 'express';
// Importa tudo a partir do barrel file
import { 
  CreateClientUseCase, 
  GetClientUseCase, 
  GetAllClientsUseCase, 
  UpdateClientUseCase, 
  DeleteClientUseCase 
} from '../../../application/use-cases/clientUseCase';
import { ClientRepositoryFactory } from '../../../infrastructure/factories/ClientRepositoryFactory';

export class ClientController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, address, password, cnpj } = req.body;
      const clientRepository = ClientRepositoryFactory.create();
      const createClientUseCase = new CreateClientUseCase(clientRepository);
      const client = await createClientUseCase.execute({ name, address, password, cnpj });
      res.status(201).json({ message: 'Cliente criado com sucesso!', client });
    } catch (error) {
      next(error);
    }
  }
  
  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const clientRepository = ClientRepositoryFactory.create();
      const getClientUseCase = new GetClientUseCase(clientRepository);
      const client = await getClientUseCase.execute(id);
      if (!client) {
        res.status(404).json({ message: 'Cliente não encontrado' });
      } else {
        res.status(200).json(client);
      }
    } catch (error) {
      next(error);
    }
  }
  
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const clientRepository = ClientRepositoryFactory.create();
      const getAllClientsUseCase = new GetAllClientsUseCase(clientRepository);
      const clients = await getAllClientsUseCase.execute();
      res.status(200).json(clients);
    } catch (error) {
      next(error);
    }
  }
  
  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { name, address, password, cnpj } = req.body;
      const clientRepository = ClientRepositoryFactory.create();
      const updateClientUseCase = new UpdateClientUseCase(clientRepository);
      const client = await updateClientUseCase.execute({ id, name, address, password, cnpj });
      if (!client) {
        res.status(404).json({ message: 'Cliente não encontrado' });
      } else {
        res.status(200).json({ message: 'Cliente atualizado com sucesso!', client });
      }
    } catch (error) {
      next(error);
    }
  }
  
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const clientRepository = ClientRepositoryFactory.create();
      const deleteClientUseCase = new DeleteClientUseCase(clientRepository);
      await deleteClientUseCase.execute(id);
      res.status(200).json({ message: 'Cliente deletado com sucesso!' });
    } catch (error) {
      next(error);
    }
  }
}
