import { Request, Response, NextFunction } from 'express';
import {
  CreateProdutoUseCase,
  GetProdutoUseCase,
  GetAllProdutosUseCase,
  UpdateProdutoUseCase,
  DeleteProdutoUseCase,
} from '../../../application/use-cases/produtoUseCase';
import { ProdutoRepositoryFactory } from '../../../infrastructure/factories/ProdutoRepositoryFactory';

export class ProdutoController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { produto, preco, tipo } = req.body;   // lê tipo
      const repo = ProdutoRepositoryFactory.create();
      const uc = new CreateProdutoUseCase(repo);
      const p = await uc.execute({ produto, preco, tipo });
      res.status(201).json({ message: 'Produto criado com sucesso!', produto: p });
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const repo = ProdutoRepositoryFactory.create();
      const uc = new GetProdutoUseCase(repo);
      const p = await uc.execute(id);
      if (!p) {
        res.status(404).json({ message: 'Produto não encontrado' });
      } else {
        res.status(200).json(p);
      }
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const repo = ProdutoRepositoryFactory.create();
      const uc = new GetAllProdutosUseCase(repo);
      const list = await uc.execute();
      res.status(200).json(list);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { produto, preco, tipo } = req.body;  // lê tipo
      const repo = ProdutoRepositoryFactory.create();
      const uc = new UpdateProdutoUseCase(repo);
      const updated = await uc.execute({ id, produto, preco, tipo });
      if (!updated) {
        res.status(404).json({ message: 'Produto não encontrado' });
      } else {
        res.status(200).json({ message: 'Produto atualizado com sucesso!', produto: updated });
      }
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const repo = ProdutoRepositoryFactory.create();
      const uc = new DeleteProdutoUseCase(repo);
      await uc.execute(id);
      res.status(200).json({ message: 'Produto deletado com sucesso!' });
    } catch (error) {
      next(error);
    }
  }
}
