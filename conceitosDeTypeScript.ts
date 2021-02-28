// Exemplo passado na aula 1

// No exemplo da prof, o ID não é numérico, seria um UUID=>universally unique identifier
/*
function enviarEmail(para, id, assunto, texto) {
    //biblioteca de envio de email
    console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario {

    send() {
        enviarEmail("pertusatti22@gmail.com", 9897, "Olá!", "Tudo bem?")
    }
}
*/

//Agora vamos fazer utilizando typescript
interface dadosDeEnvioEmail {
    para: string;
    id: string;
    assunto: string;
    texto: string;
}

function enviarEmail({ para, id, assunto, texto }: dadosDeEnvioEmail) {

    console.log(para, id, assunto, texto);
}

class enviarEmailParaUsuario {
    send() {
        enviarEmail({
            para: "pertusatti22@gmail.com",
            id: "9897",
            assunto: "Olá!",
            texto: "Tudo bem?"
        })
    }
}



//Testes Automatizados

/*
1 - Testes Unitários -> TDD, não testa acesso a bancos ou apis

2 - Testes de integração
request -> routes -> controller -> repository
<- repository <- controller <- response

3 - Testes ponta a ponta (end2end)
testes que pegam inclusive front end.
*/

