function validaFormClientes(){
    let nomeCliente = formPost.nomeCliente.value;
    let tituloPost = formPost.tituloPost.value;
    let textoPost = formPost.textoPost.value;
    let senha = formPost.senha.value;

    if ((nomeCliente == "") ||  (nomeCliente.length > 15) == true)  {
        alert("Nome inválido");
        return false;
    }

    if ((tituloPost == "") || (tituloPost.length > 20) == true) {
        alert("Título inválido");
        return false;
    }

    if ((textoPost == "") ||  (textoPost.length > 1000) == true) {
        alert("Texto inválido");
        return false;
    }

    if ((senha == "") ||  (senha.length > 8) == true)  {
        alert("Senha inválida");
        return false;
    }
}
