const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nome:senha@cluster0.ofepu.mongodb.net/biblioteca?retryWrites=true&w=majority').then(()=>{
    console.log("Banco de Dados Conectado");
}).catch((err)=>{
    console.log("Erro de Conexão! " + err)
});