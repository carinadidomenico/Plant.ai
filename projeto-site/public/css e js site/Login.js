function entrar() {
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {
        
        if (resposta.ok) {

            resposta.json().then(json => {
                

                sessionStorage.login_usuario_meuapp = json.email;
                sessionStorage.nome_usuario_meuapp = json.nome;
                sessionStorage.idCliente_usuario_meuapp = json.idCliente;
                window.location.href = 'calculadoraFinanceiraPlant.html';
            });

        } else {

            alert('email e/ou senha inválido');

            response.text().then(texto => {
                alert(error(texto));
            });
        }
    });

    return false;
}