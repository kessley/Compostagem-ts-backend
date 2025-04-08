// src/interfaces/http/controllers/OrdemPedidoController.ts
import { Request, Response, NextFunction } from 'express';
import {
  CreateOrdemPedidoUseCase,
  GetOrdemPedidoUseCase,
  GetAllOrdemPedidosUseCase,
  UpdateOrdemPedidoUseCase,
  DeleteOrdemPedidoUseCase
} from '../../../application/use-cases/ordemPedidoUseCase';
import { OrdemPedidoRepositoryFactory } from '../../../infrastructure/factories/OrdemPedidoRepositoryFactory';

export class OrdemPedidoController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { clientId, produtoId, valorTotal, totalItens } = req.body;
      const ordemPedidoRepository = OrdemPedidoRepositoryFactory.create();
      const createOrdemPedidoUseCase = new CreateOrdemPedidoUseCase(ordemPedidoRepository);
      const ordem = await createOrdemPedidoUseCase.execute({ clientId, produtoId, valorTotal, totalItens });
      res.status(201).json({ message: 'Ordem do pedido criada com sucesso!', ordem });
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const ordemPedidoRepository = OrdemPedidoRepositoryFactory.create();
      const getOrdemPedidoUseCase = new GetOrdemPedidoUseCase(ordemPedidoRepository);
      const ordem = await getOrdemPedidoUseCase.execute(id);
      if (!ordem) {
        res.status(404).json({ message: 'Ordem do pedido não encontrada' });
      } else {
        res.status(200).json(ordem);
      }
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const ordemPedidoRepository = OrdemPedidoRepositoryFactory.create();
      const getAllOrdemPedidosUseCase = new GetAllOrdemPedidosUseCase(ordemPedidoRepository);
      const ordens = await getAllOrdemPedidosUseCase.execute();
      res.status(200).json(ordens);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { clientId, produtoId, valorTotal, totalItens } = req.body;
      const ordemPedidoRepository = OrdemPedidoRepositoryFactory.create();
      const updateOrdemPedidoUseCase = new UpdateOrdemPedidoUseCase(ordemPedidoRepository);
      const updatedOrdem = await updateOrdemPedidoUseCase.execute({ id, clientId, produtoId, valorTotal, totalItens });
      if (!updatedOrdem) {
        res.status(404).json({ message: 'Ordem do pedido não encontrada' });
      } else {
        res.status(200).json({ message: 'Ordem do pedido atualizada com sucesso!', ordem: updatedOrdem });
      }
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const ordemPedidoRepository = OrdemPedidoRepositoryFactory.create();
      const deleteOrdemPedidoUseCase = new DeleteOrdemPedidoUseCase(ordemPedidoRepository);
      await deleteOrdemPedidoUseCase.execute(id);
      res.status(200).json({ message: 'Ordem do pedido deletada com sucesso!' });
    } catch (error) {
      next(error);
    }
  }
}
