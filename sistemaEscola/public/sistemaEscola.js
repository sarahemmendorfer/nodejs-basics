function validaDisciplinas() {
    // validação professor
    
    let nomeDisciplina = formDisciplinas.nomeDisciplina.value;
    let cargaHoraria = formDisciplinas.cargaHoraria.value;
    let regexNumeros = /[0-9]/;

    if ((nomeDisciplina == "") || (((regexNumeros.test(nomeDisciplina)) == true))) {
        alert("Disciplina inválida");
        return false;
    }

    if ((cargaHoraria == "") || (cargaHoraria > 5000)) {
        alert("Carga Horaria inválida");
        return false;
    }
        
}


function validaFormAlunos() {
    //validação alunos
    let nomeAluno = formAlunos.nomeAluno.value;
    let numeroMatricula = formAlunos.numeroMatricula.value;
    let cpfAluno = formAlunos.cpfAluno.value;
    let rgAluno = formAlunos.rgAluno.value;
    let paisAluno = formAlunos.paisAluno.value;
    let estadoAluno = formAlunos.estadoAluno.value;
    let cidadeAluno = formAlunos.cidadeAluno.value;
    let ruaAluno = formAlunos.ruaAluno.value;
    let cepAluno = formAlunos.cepAluno.value;
    let numeroCasaAluno = formAlunos.numeroCasaAluno.value;
    let complementoCasaAluno = formAlunos.complementoCasaAluno.value;
    let telefoneAluno = formAlunos.telefoneAluno.value;
    let regexNumeros = /[0-9]/;


    // alunos
    if (nomeAluno == "" || ((regexNumeros.test(nomeAluno)) == true)) {
        alert("Nome inválido");
        return false;
    }

    if (numeroMatricula == "") {
        alert("Matrícula não informada");
        return false;
    }

    if (cpfAluno == "") {
        alert("CPF não informado");
        return false;
    }

    var Soma;
    var Resto;
    Soma = 0;
    if (cpfAluno == "00000000000"){
        alert("CPF inválido");
        return false;
    }

    for (i=1; i<=9; i++) Soma = Soma + parseInt(cpfAluno.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)){
        Resto = 0;
    }  

    if (Resto != parseInt(cpfAluno.substring(9, 10)) ) {
        alert("CPF inválido");
        return false;
    }

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpfAluno.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)){
        Resto = 0;
    }  

    if (Resto != parseInt(cpfAluno.substring(10, 11) )){
        alert("CPF inválido");
        return false;
    }


    if (rgAluno == "" || (rgAluno.length) > 9) {
        alert("RG inválido");
        return false;
    }


    if (paisAluno == "" || ((regexNumeros.test(paisAluno)) == true)) {
        alert("País inválido");
        return false;
    }

    if (estadoAluno == "" || ((regexNumeros.test(estadoAluno)) == true)) {
        alert("Estado inválido");
        return false;
    }

    if (cidadeAluno == "" || ((regexNumeros.test(cidadeAluno)) == true)) {
        alert("Cidade inválida");
        return false;
    }

    if (ruaAluno == "" || ((regexNumeros.test(ruaAluno)) == true)) {
        alert("Rua inválida");
        return false;
    }

    if (cepAluno == "") {
        alert("CEP não informado");
        return false;
    }

    if (numeroCasaAluno == "" || (numeroCasaAluno.length) > 6) {
        alert("Número inválido");
        return false;

    }

    if (complementoCasaAluno == "") {
        alert("Complemento não informado");
        return false;
    }

    if (telefoneAluno == "" || (telefoneAluno.length) > 9 ){
        alert("Telefone inválido");
        return false;
    }
}

function validaFormProfessores() {
    // validação professor
    let nomeProfessor = formProfessores.nomeProfessor.value;
    let cpfProfessor = formProfessores.cpfProfessor.value;
    let rgProfessor = formProfessores.rgProfessor.value;
    let paisProfessor = formProfessores.paisProfessor.value;
    let estadoProfessor = formProfessores.estadoProfessor.value;
    let cidadeProfessor = formProfessores.cidadeProfessor.value;
    let ruaProfessor = formProfessores.ruaProfessor.value;
    let cepProfessor = formProfessores.cepProfessor.value;
    let numeroCasaProfessor = formProfessores.numeroCasaProfessor.value;
    let complementoCasaProfessor = formProfessores.complementoCasaProfessor.value;
    let telefoneProfessor = formProfessores.telefoneProfessor.value;
    let regexNumeros = /[0-9]/;
    
    // professores
    if (nomeProfessor == "" || ((regexNumeros.test(nomeProfessor)) == true)) {
        alert("Nome inválido");
        return false;
    }


    if (cpfProfessor == "") {
        alert("CPF não informado");
        return false;
    }

    var Soma;
    var Resto;
    Soma = 0;
    if (cpfAluno == "00000000000"){
        alert("CPF inválido");
        return false;
    }

    for (i=1; i<=9; i++) Soma = Soma + parseInt(cpfProfessor.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)){
        Resto = 0;
    }  

    if (Resto != parseInt(cpfProfessor.substring(9, 10)) ) {
        alert("CPF inválido");
        return false;
    }

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpfProfessor.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)){
        Resto = 0;
    }  

    if (Resto != parseInt(cpfProfessor.substring(10, 11) )){
        alert("CPF inválido");
        return false;
    }


    if (rgProfessor == ""  || rgProfessor > 9) {
        alert("RG inválido");
        return false;
    }

    if (paisProfessor == "" || ((regexNumeros.test(paisProfessor)) == true)) {
        alert("País não informado");
        return false;
    }

    if (estadoProfessor == "" || ((regexNumeros.test(estadoProfessor)) == true)) {
        alert("Estado inválido");
        return false;
    }

    if (cidadeProfessor == "" || ((regexNumeros.test(cidadeProfessor)) == true)) {
        alert("Cidade inválida");
        return false;
    }

    if (ruaProfessor == "" || ((regexNumeros.test(ruaProfessor)) == true)) {
        alert("Rua inválida");
        return false;
    }

    if (cepProfessor == "") {
        alert("CEP não informado");
        return false;
    }

    if (numeroCasaProfessor == "" || (numeroCasaProfessor.length) > 6) {
        alert("Número inválido");
        return false;
    }

    if (complementoCasaProfessor == "") {
        alert("Complemento não informado");
        return false;
    }

    if (telefoneProfessor == "" || (telefoneProfessor.lengt) > 9) {
        alert("Telefone infálido");
        return false;
    }
    
}





