import { Router } from 'express';
import { ClientController } from './controllers/ClientController';
import { ProdutoController } from './controllers/ProdutoController';
import { OrdemPedidoController } from './controllers/OrdemPedidoController';

const router = Router();
const clientController = new ClientController();
const produtoController = new ProdutoController();
const ordemPedidoController = new OrdemPedidoController();

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

// Rotas para OrdemPedido
router.post('/ordem-pedidos', ordemPedidoController.create.bind(ordemPedidoController));
router.get('/ordem-pedidos', ordemPedidoController.getAll.bind(ordemPedidoController));
router.get('/ordem-pedidos/:id', ordemPedidoController.get.bind(ordemPedidoController));
router.put('/ordem-pedidos/:id', ordemPedidoController.update.bind(ordemPedidoController));
router.delete('/ordem-pedidos/:id', ordemPedidoController.delete.bind(ordemPedidoController));

export default router;
