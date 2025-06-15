import { Router } from 'express';
import { ClientController } from './controllers/ClientController';
import { ProdutoController } from './controllers/ProdutoController';
import { OrdemPedidoController } from './controllers/OrdemPedidoController';
import { FornecedorController } from './controllers/FornecedorController';
import { AdminController } from './controllers/AdminController';
import { RequisicaoController } from './controllers/RequisicaoController';
const router = Router();
const clientController = new ClientController();
const produtoController = new ProdutoController();
const ordemPedidoController = new OrdemPedidoController();
const fornecedorController = new FornecedorController();
const adminController = new AdminController();
const requisicaoController = new RequisicaoController();
// Rotas para Client
router.post('/clients', clientController.create.bind(clientController));
router.get('/clients', clientController.getAll.bind(clientController));
router.get('/clients/:id', clientController.get.bind(clientController));
router.put('/clients/:id', clientController.update.bind(clientController));
router.delete('/clients/:id', clientController.delete.bind(clientController));
router.get('/clients/by-name/:nome', clientController.getByName.bind(clientController));

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
router.get('/ordem-pedidos/by-client/:clientId', ordemPedidoController.getByClient.bind(ordemPedidoController));


router.post('/fornecedores', fornecedorController.create.bind(fornecedorController));
router.get('/fornecedores', fornecedorController.getAll.bind(fornecedorController));
router.get('/fornecedores/:id', fornecedorController.get.bind(fornecedorController));
router.put('/fornecedores/:id', fornecedorController.update.bind(fornecedorController));
router.delete('/fornecedores/:id', fornecedorController.delete.bind(fornecedorController));
router.get('/fornecedores/by-name/:nome',fornecedorController.getByName.bind(fornecedorController));

// Rotas para Admin
router.post('/admins', adminController.create.bind(adminController));
router.get('/admins', adminController.getAll.bind(adminController));
router.get('/admins/:id', adminController.get.bind(adminController));
router.put('/admins/:id', adminController.update.bind(adminController));
router.delete('/admins/:id', adminController.delete.bind(adminController));
router.get('/admins/by-name/:nome', adminController.getByName.bind(adminController));

router.post('/requisicoes',requisicaoController.create.bind(requisicaoController));
router.get('/requisicoes',requisicaoController.getAll.bind(requisicaoController));
router.get('/requisicoes/:id',requisicaoController.get.bind(requisicaoController));
router.put('/requisicoes/:id/confirmar',requisicaoController.confirmarColeta.bind(requisicaoController));
router.put('/requisicoes/:id/recusar',requisicaoController.recusarRequisicao.bind(requisicaoController));
router.delete('/requisicoes/:id',requisicaoController.delete.bind(requisicaoController));



export default router;