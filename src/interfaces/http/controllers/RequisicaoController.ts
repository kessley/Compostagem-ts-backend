// src/interfaces/http/controllers/RequisicaoController.ts
import { Request, Response, NextFunction } from 'express';
import {
  CreateRequisicaoUseCase,
  GetRequisicaoUseCase,
  GetAllRequisicoesUseCase,
  UpdateRequisicaoUseCase,
  DeleteRequisicaoUseCase
} from '../../../application/use-cases/requisicaoUseCase';
import { RequisicaoRepositoryFactory } from '../../../infrastructure/factories/RequisicaoRepositoryFactory';

export class RequisicaoController {
  // 1) Criação: fornecedor passa date
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { fornecedorId, produtoId, date } = req.body;
      const repo = RequisicaoRepositoryFactory.create();
      const uc = new CreateRequisicaoUseCase(repo);
      const requisicao = await uc.execute({
        fornecedorId,
        produtoId,
        date: new Date(date),
      });
      res
        .status(201)
        .json({ message: 'Requisição criada com sucesso!', requisicao });
    } catch (err) {
      next(err);
    }
  }

  // 2) Listagem única
  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const repo = RequisicaoRepositoryFactory.create();
      const uc = new GetRequisicaoUseCase(repo);
      const r = await uc.execute(id);
      if (!r) {
        res.status(404).json({ message: 'Requisição não encontrada' });
        return;
      }
      res.status(200).json(r);
    } catch (err) {
      next(err);
    }
  }

  // 3) Listagem geral
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const repo = RequisicaoRepositoryFactory.create();
      const uc = new GetAllRequisicoesUseCase(repo);
      const list = await uc.execute();
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  }

  // 4) Confirmação pelo admin (apenas muda status para CONFIRMADO)
  async confirmarColeta(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;
      const repo = RequisicaoRepositoryFactory.create();
      const uc = new UpdateRequisicaoUseCase(repo);
      const updated = await uc.execute({
        id,
        date: null,            // não altera a data
        status: 'CONFIRMADO',  // confirma
      });
      if (!updated) {
        res.status(404).json({ message: 'Requisição não encontrada' });
        return;
      }
      res
        .status(200)
        .json({ message: 'Requisição confirmada com sucesso!', requisicao: updated });
    } catch (err) {
      next(err);
    }
  }

  // 5) Exclusão
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const repo = RequisicaoRepositoryFactory.create();
      const uc = new DeleteRequisicaoUseCase(repo);
      await uc.execute(id);
      res.status(200).json({ message: 'Requisição deletada com sucesso!' });
    } catch (err) {
      next(err);
    }
  }
}
