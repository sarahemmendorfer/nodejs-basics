function validaFormClientes(){
    let nomeCliente = formClientes.nomeCliente.value;
    let agenciaCliente = formClientes.agenciaCliente.value;
    let contaCliente = formClientes.contaCliente.value;
    let regexNumeros = /[0-9]/;



    // Primeiras letras da string para maiúscula
    const palavras = nomeCliente.split(" ");

    for (let i = 0; i < palavras.length; i++) {
        palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substr(1);
    }

    novoNomeCliente = palavras.join(" ");
    document.getElementById('nomeCliente').value = novoNomeCliente;


    // validação do nome do cliente
    if ((nomeCliente == "") || (((regexNumeros.test(nomeCliente)) == true))) {
        alert("Nome inválido");
        return false;
    }

    // validação da agência do cliente

    if ((agenciaCliente == "") || (agenciaCliente.length > 4) == true) {
        alert("Agência inválida");
        return false;
    }

    //validação da conta
    if ((contaCliente == "") || (contaCliente.length > 9) == true) {
        alert("Agência inválida");
        return false;
    }
}