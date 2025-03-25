// src/interfaces/http/controllers/ProdutoController.ts
import { Request, Response, NextFunction } from 'express';
import { 
  CreateProdutoUseCase,
  GetProdutoUseCase,
  GetAllProdutosUseCase,
  UpdateProdutoUseCase,
  DeleteProdutoUseCase
} from '../../../application/use-cases/produtoUseCase';
import { ProdutoRepositoryFactory } from '../../../infrastructure/factories/ProdutoRepositoryFactory';

export class ProdutoController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { produto, preco } = req.body;
      const produtoRepository = ProdutoRepositoryFactory.create();
      const createProdutoUseCase = new CreateProdutoUseCase(produtoRepository);
      const novoProduto = await createProdutoUseCase.execute({ produto, preco });
      res.status(201).json({ message: 'Produto criado com sucesso!', produto: novoProduto });
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const produtoRepository = ProdutoRepositoryFactory.create();
      const getProdutoUseCase = new GetProdutoUseCase(produtoRepository);
      const produto = await getProdutoUseCase.execute(id);
      if (!produto) {
        res.status(404).json({ message: 'Produto não encontrado' });
      } else {
        res.status(200).json(produto);
      }
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const produtoRepository = ProdutoRepositoryFactory.create();
      const getAllProdutosUseCase = new GetAllProdutosUseCase(produtoRepository);
      const produtos = await getAllProdutosUseCase.execute();
      res.status(200).json(produtos);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { produto, preco } = req.body;
      const produtoRepository = ProdutoRepositoryFactory.create();
      const updateProdutoUseCase = new UpdateProdutoUseCase(produtoRepository);
      const updatedProduto = await updateProdutoUseCase.execute({ id, produto, preco });
      if (!updatedProduto) {
        res.status(404).json({ message: 'Produto não encontrado' });
      } else {
        res.status(200).json({ message: 'Produto atualizado com sucesso!', produto: updatedProduto });
      }
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const produtoRepository = ProdutoRepositoryFactory.create();
      const deleteProdutoUseCase = new DeleteProdutoUseCase(produtoRepository);
      await deleteProdutoUseCase.execute(id);
      res.status(200).json({ message: 'Produto deletado com sucesso!' });
    } catch (error) {
      next(error);
    }
  }
}
