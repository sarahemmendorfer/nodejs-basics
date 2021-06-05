const Cadastros = require('../models/rede-model');

exports.listar_cadastros = (req, res) => {
    let cadastros = Cadastros.find({}, (err, cadastros) => {
        if (err) {
            console.error(err)
            return res.status(500).send("Erro ao consultar o Cliente")
        }
        res.render('pages/cadastros', {cadastros: cadastros});
    })
}


exports.cadastrar_post_get = (req, res) => {

    res.render('pages/cadastrarPost');
}

exports.cadastrar_post_post = (req, res) => {

    let cadastro = new Cadastros();
    cadastro.nome = req.body.nomeCliente;
    cadastro.email = req.body.emailCliente;
    cadastro.titulo = req.body.tituloPost;
    cadastro.texto = req.body.textoPost;
    cadastro.tema = req.body.temaPost;
    cadastro.senha = req.body.senha;

    cadastro.save(err => {
        if (err)
        return res.status(500).send("Erro ao cadastrar Cliente")

        return res.redirect('/')

    })
}

// deletar
exports.deletar_usuario = (req, res) => {

    id = req.params.id
    Cadastros.deleteOne({_id: id}, (err, result) => {
        if (err) return res.status(500).send("Erro ao consultar o usuário")
    })

    res.redirect('/cadastros')    

}

// editar

exports.editar_usuarios_get = (req, res) => {
    Cadastros.findById(req.params.id, (err, cadastro) => {
        if (err){
           return res.status(500).send("Erro ao consultar o usuário") 
        }
         res.render('pages/editarCadastros', {cadastro: cadastro})
    })
}

exports.editar_usuarios_post = (req, res) => {
    id = req.params.id;
    Cadastros.findById(id, (err, cadastro) => {
        if (err){
           return res.status(500).send("Erro ao consultar") 
        }

        cadastro.nome = req.body.nomeCliente;
        cadastro.email = req.body.emailCliente;
        cadastro.titulo = req.body.tituloPost;
        cadastro.texto = req.body.textoPost;
        cadastro.tema = req.body.temaPost;
        cadastro.senha = req.body.senha;

        cadastro.save(err => {
            if (err){
                return res.status(500).send("Erro ao cadastrar")
            }
            return res.redirect('/cadastros')
        }) 
    })
}