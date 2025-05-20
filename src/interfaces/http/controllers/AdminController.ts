import { Request, Response, NextFunction } from 'express';
import {
  CreateAdminUseCase,
  GetAdminUseCase,
  GetAllAdminsUseCase,
  GetAdminByNameUseCase,
  UpdateAdminUseCase,
  DeleteAdminUseCase
} from '../../../application/use-cases/adminUseCase';
import { AdminRepositoryFactory } from '../../../infrastructure/factories/AdminRepositoryFactory';

export class AdminController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { nome, senha } = req.body;
      const repo = AdminRepositoryFactory.create();
      const uc = new CreateAdminUseCase(repo);
      const admin = await uc.execute({ nome, senha });
      res.status(201).json({ message: 'Admin criado com sucesso!', admin });
    } catch (error) {
      next(error);
    }
  }

  async getByName(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { nome } = req.params;
      const repo = AdminRepositoryFactory.create();
      const uc = new GetAdminByNameUseCase(repo);
      const admin = await uc.execute(nome);
      if (!admin) {
        res.status(404).json({ message: 'Admin não encontrado' });
      } else {
        res.status(200).json(admin);
      }
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const repo = AdminRepositoryFactory.create();
      const uc = new GetAdminUseCase(repo);
      const admin = await uc.execute(id);
      if (!admin) {
        res.status(404).json({ message: 'Admin não encontrado' });
      } else {
        res.status(200).json(admin);
      }
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const repo = AdminRepositoryFactory.create();
      const uc = new GetAllAdminsUseCase(repo);
      const list = await uc.execute();
      res.status(200).json(list);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const { nome, senha } = req.body;
      const repo = AdminRepositoryFactory.create();
      const uc = new UpdateAdminUseCase(repo);
      const admin = await uc.execute({ id, nome, senha });
      if (!admin) {
        res.status(404).json({ message: 'Admin não encontrado' });
      } else {
        res.status(200).json({ message: 'Admin atualizado com sucesso!', admin });
      }
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const repo = AdminRepositoryFactory.create();
      const uc = new DeleteAdminUseCase(repo);
      await uc.execute(id);
      res.status(200).json({ message: 'Admin deletado com sucesso!' });
    } catch (error) {
      next(error);
    }
  }
}
