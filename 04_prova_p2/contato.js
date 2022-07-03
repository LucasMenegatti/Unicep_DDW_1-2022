let form = document.getElementById("form-contato");

form.addEventListener("submit", validaCadastro);  //Fica "escutando/observando o botao", qdo clicado, a funcao validaCadastro() é executada.

function validaCadastro(evt) {

    let erro = false;

    if (document.getElementById('nome').value == "") {
        document.getElementById('erro-nome').classList.remove('erro-oculto')
        erro = true;
    } else {
        document.getElementById('erro-nome').classList.add('erro-oculto')
    }

    if (document.getElementById('email').value == "") {
        document.getElementById('erro-email').classList.remove('erro-oculto')
        erro = true;
    } else {
        document.getElementById('erro-email').classList.add('erro-oculto')
    }

    if (document.getElementById('assunto').value == "") {
        document.getElementById('erro-assunto').classList.remove('erro-oculto')
        erro = true;
    } else {
        document.getElementById('erro-assunto').classList.add('erro-oculto')
    }

    if (document.getElementById('mensagem').value == "") {
        document.getElementById('erro-mensagem').classList.remove('erro-oculto')
        erro = true;
    } else {
        document.getElementById('erro-mensagem').classList.add('erro-oculto')
    }

    // Se erro !=0 entao alguma caixa de edicao nao foi preenchida entao, preventDefault() é executado, cancelando assim o evento de click do botao.
    if (erro === true) evt.preventDefault(); else {
        alert("mensagem enviada!"); // Notifica que a mensagem foi enviada
        evt.preventDefault(); //Acrescentei para evitar que seja exibido o erro 405, mas será retirado com a implementação do back-end
        location.reload(); // Recarrega a página
    }

}