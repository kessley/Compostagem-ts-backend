import { Router } from 'express';
import { ClientController } from './controllers/ClientController';

const router = Router();
const clientController = new ClientController();

// Utilizando bind para preservar o contexto e repassando o next implicitamente
router.post('/clients', clientController.create.bind(clientController));

// Outras rotas (GET, PUT, DELETE, etc.) podem ser adicionadas aqui

export default router;
