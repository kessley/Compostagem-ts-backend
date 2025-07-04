// src/interfaces/http/controllers/FornecedorController.ts
import { Request, Response, NextFunction } from 'express';
import {
  CreateFornecedorUseCase,
  GetFornecedorUseCase,
  GetAllFornecedoresUseCase,
  UpdateFornecedorUseCase,
  DeleteFornecedorUseCase,
  GetFornecedorByNameUseCase,
} from '../../../application/use-cases/fornecedorUseCase';
import { FornecedorRepositoryFactory } from '../../../infrastructure/factories/FornecedorRepositoryFactory';

export class FornecedorController {
  // CREATE
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { nome, cnpj, senha, endereco, razaoSocial, segmento } = req.body;
      const fornecedorRepository = FornecedorRepositoryFactory.create();
      const createFornecedorUseCase = new CreateFornecedorUseCase(fornecedorRepository);
      const fornecedor = await createFornecedorUseCase.execute({ nome, cnpj, senha, endereco, razaoSocial, segmento });
      res.status(201).json({ message: 'Fornecedor criado com sucesso!', fornecedor });
    } catch (error) {
      next(error);
    }
  }

  // READ by ID
  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const fornecedorRepository = FornecedorRepositoryFactory.create();
      const getFornecedorUseCase = new GetFornecedorUseCase(fornecedorRepository);
      const fornecedor = await getFornecedorUseCase.execute(id);

      if (!fornecedor) {
        res.status(404).json({ message: 'Fornecedor não encontrado' });
      } else {
        res.status(200).json(fornecedor);
      }
    } catch (error) {
      next(error);
    }
  }

  // READ All
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const fornecedorRepository = FornecedorRepositoryFactory.create();
      const getAllFornecedoresUseCase = new GetAllFornecedoresUseCase(fornecedorRepository);
      const fornecedores = await getAllFornecedoresUseCase.execute();
      res.status(200).json(fornecedores);
    } catch (error) {
      next(error);
    }
  }

  // UPDATE
  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { nome, cnpj, senha, endereco, razaoSocial, segmento } = req.body;
      const fornecedorRepository = FornecedorRepositoryFactory.create();
      const updateFornecedorUseCase = new UpdateFornecedorUseCase(fornecedorRepository);
      const fornecedor = await updateFornecedorUseCase.execute({ id, nome, cnpj, senha, endereco, razaoSocial, segmento });

      if (!fornecedor) {
        res.status(404).json({ message: 'Fornecedor não encontrado' });
      } else {
        res.status(200).json({ message: 'Fornecedor atualizado com sucesso!', fornecedor });
      }
    } catch (error) {
      next(error);
    }
  }

  // DELETE
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const fornecedorRepository = FornecedorRepositoryFactory.create();
      const deleteFornecedorUseCase = new DeleteFornecedorUseCase(fornecedorRepository);
      await deleteFornecedorUseCase.execute(id);
      res.status(200).json({ message: 'Fornecedor deletado com sucesso!' });
    } catch (error) {
      next(error);
    }
  }

  // LOGIN / busca por nome
  async getByName(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { nome } = req.params;
      const repo = FornecedorRepositoryFactory.create();
      const uc = new GetFornecedorByNameUseCase(repo);
      const fornecedor = await uc.execute(nome);
      if (!fornecedor) {
        res.status(404).json({ message: 'Fornecedor não encontrado' });
      } else {
        res.status(200).json(fornecedor);
      }
    } catch (err) {
      next(err);
    }
  }

}
