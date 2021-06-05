const express = require('express');
const router = express.Router();

const clientesController = require('../controllers/clientes-controller');

router.get('/', clientesController.listar_clientes);

module.exports = router;

// cadastrar
router.get('/cadastrarClientes', clientesController.cadastrar_clientes_get)

router.post('/cadastrarClientes', clientesController.cadastrar_clientes_post)

// deletar
router.get('/deletarClientes/:id', clientesController.deletar_clientes)

// editar
router.get('/editarClientes/:id', clientesController.editar_clientes_get)
router.post('/editarClientes/:id', clientesController.editar_clientes_post)

