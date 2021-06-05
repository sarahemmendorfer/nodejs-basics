const express = require('express');
const app = express();

const port = 3000;

const mongoose = require('mongoose');

// meu banco de dados
mongoose.connect('mongodb+srv://nome:senha@cluster0.ofepu.mongodb.net/banco?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.urlencoded())
app.use(express.json())


const clientes_router = require('./routers/clientes-router')

app.use('/clientes', clientes_router)

app.get('/', (req, res) => {
    res.send("Página Inicial")
})

app.listen(port, () => {
    console.log("Servidor rodando na porta 3000")
})

app.use(express.static('public'))