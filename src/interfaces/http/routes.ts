import { Router } from 'express';
import { ClientController } from './controllers/ClientController';

const router = Router();
const clientController = new ClientController();

// Criação
router.post('/clients', clientController.create.bind(clientController));
// Busca de todos
router.get('/clients', clientController.getAll.bind(clientController));
// Busca por id
router.get('/clients/:id', clientController.get.bind(clientController));
// Atualização
router.put('/clients/:id', clientController.update.bind(clientController));
// Deleção
router.delete('/clients/:id', clientController.delete.bind(clientController));

export default router;
