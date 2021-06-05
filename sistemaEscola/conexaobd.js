const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sarahbd:sarahbd@cluster0.ofepu.mongodb.net/sistemaEscola?retryWrites=true&w=majority').then(()=>{
    console.log("O Banco de Dados está Conectado");
}).catch((err)=>{
    console.log("Erro na Conexão! " + err)
});