const mongoose = require('mongoose');

const Clientes = mongoose.model('clientes', {
    nome: String,
    agencia: Number,
    operacao: String,
    conta: Number

});

module.exports = Clientes;