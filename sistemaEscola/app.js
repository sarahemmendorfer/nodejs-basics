const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

const port = 3000;

mongoose.connect('mongodb+srv://sarahbd:sarahbd@cluster0.ofepu.mongodb.net/sistemaEscola?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const Alunos = mongoose.model('alunos', {
    cadNomeAluno: String,
    cadNumeroMatricula: String,
    cadCpfAluno: Number,
    cadRgAluno: Number,
    cadPaisAluno: String,
    cadEstadoAluno: String,
    cadCidadeAluno: String,
    cadRuaAluno: String,
    cadCepAluno: String,
    cadNumeroCasaAluno: Number,
    cadComplementoCasaAluno: String,
    cadTelefoneAluno: String
});

const Disciplinas = mongoose.model('disciplinas', {
    cadNomeDisciplina: String,
    cadCargaHoraria: Number
});

const Professores = mongoose.model('professores', {
    cadNomeProfessor: String,
    cadCpfProfessor: Number,
    cadRgProfessor: Number,
    cadPaisProfessor: String,
    cadEstadoProfessor: String,
    cadCidadeProfessor: String,
    cadRuaProfessor: String,
    cadCepProfessor: String,
    cadNumeroCasaProfessor: Number,
    cadComplementoCasaProfessor: String,
    cadTelefoneProfessor: String
});

app.get('/'), (req, res) => {
    res.render('pages/index')
};

app.get('/alunos', (req, res)=>{
    let alunos = Alunos.find({}, (err, alunos) => {
        if (err) {
            console.error(err)
        return res.status(500).send("Erro na consulta do alunos.")
    }
        res.render('pages/alunos', {alunos: alunos})
    });
});

app.get('/disciplinas', (req, res)=>{
    let disciplinas = Disciplinas.find({}, (err, disciplinas) => {
        if (err) {
            console.error(err)
        return res.status(500).send("Erro na consulta das Disciplinas.")
    }
        res.render('pages/disciplinas', {disciplinas: disciplinas})
    });
});

app.get('/professores', (req, res)=>{
    let professores = Professores.find({}, (err, professores) => {
        if (err) {
            console.error(err)
        return res.status(500).send("Erro na consulta dos professores.")
    }
        res.render('pages/professores', {professores: professores})
    });
});

app.get('/cadastrarAlunos', (req, res) => {
    res.render('pages/sistemaAlunos');
});


app.get('/cadastrarDisciplinas', (req, res) => {
    res.render('pages/sistemaDisciplinas');
});

app.get('/cadastrarProfessores', (req, res) => {
    res.render('pages/sistemaProfessores');
});

app.post('/cadastrarAlunos', (req, res) => {
    let aluno = new Alunos();
    aluno.cadNomeAluno = req.body.nomeAluno;
    aluno.cadNumeroMatricula = req.body.numeroMatricula;
    aluno.cadCpfAluno = req.body.cpfAluno;
    aluno.cadRgAluno = req.body.rgAluno;
    aluno.cadPaisAluno = req.body.paisAluno;
    aluno.cadEstadoAluno = req.body.estadoAluno;
    aluno.cadCidadeAluno = req.body.cidadeAluno;
    aluno.cadRuaAluno = req.body.ruaAluno;
    aluno.cadCepAluno = req.body.cepAluno;
    aluno.cadNumeroCasaAluno = req.body.numeroCasaAluno;
    aluno.cadComplementoCasaAluno = req.body.complementoCasaAluno;
    aluno.cadTelefoneAluno = req.body.telefoneAluno;

    aluno.save(err =>{
        if(err)
            return res.status(500).send("Erro ao cadastrar o aluno.");
        return res.redirect('cadastrarAlunos');
    });
});


app.post('/cadastrarDisciplinas', (req, res) => {
    let disciplina = new Disciplinas();
    disciplina.cadNomeDisciplina = req.body.nomeDisciplina;
    disciplina.cadCargaHoraria = req.body.cargaHoraria;

    disciplina.save(err =>{
        if(err)
            return res.status(500).send("Erro ao cadastrar a disciplina.");
        return res.redirect('cadastrarDisciplinas');
    });
});


app.post('/cadastrarProfessores', (req, res) => {
    let professor = new Professores();
    professor.cadNomeProfessor = req.body.nomeProfessor;
    professor.cadCpfProfessor = req.body.cpfProfessor;
    professor.cadRgProfessor = req.body.rgProfessor;
    professor.cadPaisProfessor = req.body.paisProfessor;
    professor.cadEstadoProfessor = req.body.estadoProfessor;
    professor.cadCidadeProfessor = req.body.cidadeProfessor;
    professor.cadRuaProfessor = req.body.ruaProfessor;
    professor.cadCepProfessor = req.body.cepProfessor;
    professor.cadNumeroCasaProfessor = req.body.numeroCasaProfessor;
    professor.cadComplementoCasaProfessor = req.body.complementoCasaProfessor;
    professor.cadTelefoneProfessor = req.body.telefoneProfessor;

    professor.save(err =>{
        if(err)
            return res.status(500).send("Erro ao cadastrar o professor.");
        return res.redirect('cadastrarProfessores');
    });
});

app.get('/deletarAluno/:id', (req, res)=>{
    id = req.params.id;
    Alunos.deleteOne({_id:id}, (err, resul)=>{
         if(err)
          return res.status(500).send("Erro ao deletar o aluno");
    });
    res.redirect('/alunos')
});

app.get('/deletarProfessor/:id', (req, res)=>{
    id = req.params.id;
    Professores.deleteOne({_id:id}, (err, resul)=>{
         if(err)
          return res.status(500).send("Erro ao deletar o professor");
    });
    res.redirect('/professores')
});

app.get('/deletarDisciplina/:id', (req, res)=>{
    id = req.params.id;
    Disciplinas.deleteOne({_id:id}, (err, resul)=>{
         if(err)
          return res.status(500).send("Erro ao deletar a disciplina");
    });
    res.redirect('/disciplinas')
});

app.get('/editarAlunos/:id',(req, res)=>{
    Alunos.findById(req.params.id, (err, aluno)=>{
        if(err){
            return res.status(500).send("erro ao consultar o aluno.");
        }
            
        res.render('pages/formEditarAlunos', {aluno:aluno})
    })
});

app.post('/editarAlunos/:id', (req, res)=>{

    id = req.params.id;
    Alunos.findById(id,(err, aluno)=>{
        if(err){
            return res.status(500).send("Erro ao consultar");
        } 
        aluno.cadNomeAluno = req.body.nomeAluno;
        aluno.cadNumeroMatricula = req.body.numeroMatricula;
        aluno.cadCpfAluno = req.body.cpfAluno;
        aluno.cadRgAluno = req.body.rgAluno;
        aluno.cadPaisAluno = req.body.paisAluno;
        aluno.cadEstadoAluno = req.body.estadoAluno;
        aluno.cadCidadeAluno = req.body.cidadeAluno;
        aluno.cadRuaAluno = req.body.ruaAluno;
        aluno.cadCepAluno = req.body.cepAluno;
        aluno.cadNumeroCasaAluno = req.body.numeroCasaAluno;
        aluno.cadComplementoCasaAluno = req.body.complementoCasaAluno;
        aluno.cadTelefoneAluno = req.body.telefoneAluno;

        aluno.save(err =>{
            if(err)
                return res.status(500).send("Erro ao consultar");
            return res.redirect('/alunos');
        })
    })
})

app.get('/editarProfessores/:id',(req, res)=>{
    Professores.findById(req.params.id, (err, professor)=>{
        if(err){
            return res.status(500).send("erro ao consultar o professor");
        }
            
        res.render('pages/formEditarProfessores', {professor:professor})
    })
});

app.post('/editarProfessores/:id', (req, res)=>{

    id = req.params.id;
    Professores.findById(id,(err, professor)=>{
        if(err){
            return res.status(500).send("Erro ao consultar");
        } 
        professor.cadNomeProfessor = req.body.nomeProfessor;
        professor.cadCpfProfessor = req.body.cpfProfessor;
        professor.cadRgProfessor = req.body.rgProfessor;
        professor.cadPaisProfessor = req.body.paisProfessoro;
        professor.cadEstadoProfessor = req.body.estadoProfessor;
        professor.cadCidadeProfessor = req.body.cidadeProfessor;
        professor.cadRuaProfessor = req.body.ruaProfessor;
        professor.cadCepProfessor = req.body.cepProfessor;
        professor.cadNumeroCasaProfessor = req.body.numeroCasProfessor;
        professor.cadComplementoCasaProfessor = req.body.complementoCasaProfessor;
        professor.cadTelefoneProfessor = req.body.telefoneProfessor;

        professor.save(err =>{
            if(err)
                return res.status(500).send("Erro ao consultar");
            return res.redirect('/professores');
        })
    })
})

app.get('/editarDisciplinas/:id',(req, res)=>{
    Disciplinas.findById(req.params.id, (err, disciplina)=>{
        if(err){
            return res.status(500).send("erro ao consultar a disciplina");
        }
            
        res.render('pages/formEditarDisciplinas', {disciplina:disciplina})
    })
});

app.post('/editarDisciplinas/:id', (req, res)=>{

    id = req.params.id;
    Disciplinas.findById(id,(err, disciplina)=>{
        if(err){
            return res.status(500).send("Erro ao consultar");
        } 

        disciplina.cadNomeDisciplina = req.body.nomeDisciplina;
        disciplina.cadCargaHoraria = req.body.cargaHoraria;
    
        disciplina.save(err =>{
            if(err){
                return res.status(500).send("Erro ao consultar");
            }
        return res.redirect('/disciplinas');
        })
    })
})

app.listen(port,()=>{
    console.log("O servidor está rodando na porta 3000.")
});