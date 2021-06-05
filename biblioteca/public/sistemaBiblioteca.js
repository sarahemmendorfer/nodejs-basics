// $(function() {
//     $( "#dataCadastro" ).datepicker({
//         changeMonth: true,
//         changeYear: true,
//         showOtherMonths: true,
//         selectOtherMonths: true,
//         ateFormat: 'dd/mm/yy',
//         dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
//         dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
//         dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
//         monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
//         monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
//         });
//     });

let currentDate = new Date();
document.getElementById('dataCadastro').setAttribute('value', currentDate);
document.getElementById('dataCadastro').setAttribute('style', 'text-align: center');

function validaFormulario() {
    let titulo = formLivros.titulo.value;
    let codigo = formLivros.codigo.value;
    let assunto = formLivros.assunto.value;
    let autor = formLivros.autor.value;
    let idioma = formLivros.idioma.value;
    let paginas = formLivros.paginas.value;
    let edicao = formLivros.edicao.value;
    let ano = formLivros.ano.value;
    const regexNumeros = /[0-9]/;
    let currentYear = new Date().getFullYear();

    
    if((titulo == "") || ((titulo.length) >= 6000)){
        document.getElementById('titulo').setAttribute('style', 'background: #CFCFC4');

    }

    if((codigo == "") || ((codigo.length) >= 20)){
        document.getElementById('codigo').setAttribute('style', 'background: #CFCFC4');


    }

    if((assunto == "") || ((assunto.length) >= 100) || ((regexNumeros.test(assunto)) == true)){
        document.getElementById('assunto').setAttribute('style', 'background: #CFCFC4');

    }


    if((autor == "") || ((autor.length) >= 50) || ((regexNumeros.test(autor)) == true)){
         document.getElementById('autor').setAttribute('style', 'background: #CFCFC4');
    }


    if((idioma == "") || ((idioma.length) >= 50) || ((regexNumeros.test(idioma)) == true)){
        document.getElementById('idioma').setAttribute('style', 'background: #CFCFC4');

    }

    if((paginas == "") || ((paginas.length) >= 6)){
        document.getElementById('paginas').setAttribute('style', 'background: #CFCFC4');

    }

    if((edicao == "") || ((edicao.length) >= 3)){
        document.getElementById('edicao').setAttribute('style', 'background: #CFCFC4');


    }

    if((ano == "") || ((ano.length) <= 0) || ((ano.length) > currentYear)){
        document.getElementById('ano').setAttribute('style', 'background: #CFCFC4');
    } 

    // function limpar(myId){
    //     document.getElementById('myId').setAttribute('style', 'background: white');
    // };
}


