import { Request, Response, NextFunction } from 'express';
import { CreateClientUseCase } from '../../../application/use-cases/clientUseCase';
import { ClientRepositoryFactory } from '../../../infrastructure/factories/ClientRepositoryFactory';

export class ClientController {
  // Método atualizado para incluir o parâmetro next e tratar erros
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id, name, address, password, cnpj } = req.body;

      const clientRepository = ClientRepositoryFactory.create();
      const createClientUseCase = new CreateClientUseCase(clientRepository);

      const client = await createClientUseCase.execute({
        id,
        name,
        address,
        password,
        cnpj,
      });

      res.status(201).json({ message: 'Cliente criado com sucesso!', client });
    } catch (error) {
      next(error); // Encaminha o erro para o middleware de tratamento de erros
    }
  }
}
