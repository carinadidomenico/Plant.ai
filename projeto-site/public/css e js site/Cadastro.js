// function cadastrar(){
//     if(senha.value == Csenha.value){
//     }
//     else{
//         alert(`Senha invalida, reconfigure sua senha!`);
//     }
// }


function cadastrar() {
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (response) {
        
        if (response.ok) {

            window.location.href='Login.html';

        }
        
        else {

            alert(response.text);

            console.log('Erro de cadastro!');
            response.text().then(function (resposta) {
                div_erro.innerHTML = resposta;
            });
        }
    });

    return false;
}