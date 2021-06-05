const mongoose = require('mongoose');

const Cadastros = mongoose.model('cadastros', {
    nome: String,
    email: String,
    titulo: String,
    texto: String,
    tema: String,
    senha: String
});

module.exports = Cadastros;