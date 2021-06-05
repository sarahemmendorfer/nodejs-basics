const Clientes = require('../models/clientes-model');

exports.listar_clientes = (req, res) => {
    let clientes = Clientes.find({}, (err, clientes) => {
        if (err) {
            console.error(err)
            return res.status(500).send("Erro ao consultar o Cliente")
        }
        res.render('pages/clientes', {clientes: clientes});
    })
}

exports.cadastrar_clientes_get = (req, res) => {

    res.render('pages/formClientes');
}

exports.cadastrar_clientes_post = (req, res) => {

    let cliente = new Clientes();
    cliente.nome = req.body.nomeCliente;
    cliente.agencia = req.body.agenciaCliente;
    cliente.operacao = req.body.operacaoCliente;
    cliente.conta = req.body.contaCliente;

    cliente.save(err => {
        if (err)
        return res.status(500).send("Erro ao cadastrar Cliente")

        return res.redirect('/clientes')

    })
}

// deletar
exports.deletar_clientes = (req, res) => {

    id = req.params.id
    Clientes.deleteOne({_id: id}, (err, result) => {
        if (err) return res.status(500).send("Erro ao consultar o cliente")
    })

    res.redirect('/clientes')    

}

// editar

exports.editar_clientes_get = (req, res) => {
    Clientes.findById(req.params.id, (err, cliente) => {
        if (err){
           return res.status(500).send("Erro ao consultar o cliente") 
        }
         res.render('pages/formEditarClientes', {cliente: cliente})
    })
}

exports.editar_clientes_post = (req, res) => {
    id = req.params.id;
    Clientes.findById(id, (err, cliente) => {
        if (err){
           return res.status(500).send("Erro ao consultar cliente") 
        }

        cliente.nome = req.body.nomeCliente
        cliente.agencia = req.body.agenciaCliente
        cliente.operacao = req.body.operacaoCliente
        cliente.conta = req.body.contaCliente

        cliente.save(err => {
            if (err){
                return res.status(500).send("Erro ao cadastrar Cliente")
            }
            return res.redirect('/clientes')
        }) 
    })
}