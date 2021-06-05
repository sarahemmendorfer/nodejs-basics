const express = require('express');
const router = express.Router();

const redeController = require('../controllers/rede-controller');

router.get('/', redeController.listar_cadastros);

module.exports = router;

router.get('/cadastrarPost', redeController.cadastrar_post_get);

router.post('/cadastrarPost', redeController.cadastrar_post_post);

// deletar
router.get('/deletarUsuarios/:id', redeController.deletar_usuario);

// editar
router.get('/editarCadastros/:id', redeController.editar_usuarios_get);
router.post('/editarCadastros/:id', redeController.editar_usuarios_post);