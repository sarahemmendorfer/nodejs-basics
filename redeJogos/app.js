const express = require('express');
const app = express();

const port = 3000;

const mongoose = require('mongoose');
const Cadastros = require('./models/rede-model');

mongoose.connect('mongodb+srv://sarahbd:sarahbd@cluster0.ofepu.mongodb.net/redeSocial?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.json())
app.use(express.urlencoded({extended: true})); 

app.use(express.static(__dirname + '/public'));

const rede_router = require('./routers/rede-router')

app.use('/cadastros', rede_router)
app.use('/editarCadastros', rede_router)

app.get('/', (req, res) => {
    Cadastros.find({}).sort({'_id': -1}).exec(function(err, cadastros){
        cadastros = cadastros.map(function(val){
            return{
                nome: val.nome,
                email: val.email,
                titulo: val.titulo,
                texto: val.texto,
                tema: val.tema,
                senha: val.senha,
                textoCurto: val.texto.substr(0, 100)
                
            }

    });

    res.render('pages/posts', {cadastros: cadastros});  
    });

})


app.listen(port, () => {
    console.log("Servidor rodando na porta 3000")
})
