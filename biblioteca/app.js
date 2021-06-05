//chamada do express
const express = require('express');

//chamada do mongoose
const mongoose = require('mongoose');

//criando aplicação do express
const app = express();

//permite  a circulação de dados de uma página para outra
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

//definindo a forma de visualização
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// porta em que o servidor HTTP vai funcionar
const port = 3000;

// conexão com o banco de dados
mongoose.connect('mongodb+srv://nome:senha@cluster0.ofepu.mongodb.net/biblioteca?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

// modelo de biblioteca
const Livros = mongoose.model('livros', {
    tituloLivro: String,
    codigoLivro: String,
    assuntoLivro: String,
    autorLivro: String,
    idiomaLivro: String,
    dataCadastroLivro: String,
    paginasLivro: Number,
    edicaoLivro: Number,
    anoLivro: Number
});

//definindo a rota principal da aplicação
app.get('/', (req, res)=>{
    res.render('pages/livros');
});

app.get('/livros', (req, res)=>{
    let livros = Livros.find({}, (err, livros) => {
        if (err) {
            console.error(err)
        return res.status(500).send("Erro ao consultar Livros")
    }
        res.render('pages/livros', {livros: livros})
    });
});

app.get('/deletarLivro/:id', (req, res)=>{
    id = req.params.id;
    Livros.deleteOne({_id:id}, (err, resul)=>{
         if(err)
          return res.status(500).send("Erro ao deletar livro");
    });
    res.redirect('/livros')
});

app.get('/cadastrarLivros', (req, res) => {
    res.render('pages/sistemaBiblioteca');
});

// rota de envio de dados
app.post('/cadastrarLivros', (req, res) => {
    let livro = new Livros();
    livro.tituloLivro = req.body.titulo;
    livro.codigoLivro = req.body.codigo;
    livro.assuntoLivro = req.body.assunto;
    livro.autorLivro = req.body.autor;
    livro.idiomaLivro = req.body.idioma;
    livro.dataCadastroLivro = req.body.dataCadastro;
    livro.paginasLivro = req.body.paginas;
    livro.edicaoLivro = req.body.edicao;
    livro.anoLivro = req.body.ano;

    livro.save(err =>{
        if(err)
            return res.status(500).send("Erro ao cadastrar o Livro");
        return res.redirect('cadastrarLivros');
    });
});

//conexão com o servidor
app.listen(port,()=>{
    console.log("servidor rodando na porta 3000")
});