import { Router } from 'express';
import { ClientController } from './controllers/ClientController';
import { ProdutoController } from './controllers/ProdutoController';

const router = Router();
const clientController = new ClientController();
const produtoController = new ProdutoController();

// Rotas para Client
router.post('/clients', clientController.create.bind(clientController));
router.get('/clients', clientController.getAll.bind(clientController));
router.get('/clients/:id', clientController.get.bind(clientController));
router.put('/clients/:id', clientController.update.bind(clientController));
router.delete('/clients/:id', clientController.delete.bind(clientController));

// Rotas para Produto
router.post('/produtos', produtoController.create.bind(produtoController));
router.get('/produtos', produtoController.getAll.bind(produtoController));
router.get('/produtos/:id', produtoController.get.bind(produtoController));
router.put('/produtos/:id', produtoController.update.bind(produtoController));
router.delete('/produtos/:id', produtoController.delete.bind(produtoController));

export default router;
