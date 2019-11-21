
function pegarProdutos(){
fetch("/usuarios/produtos",{
    method: "POST",
    body: sessionStorage.idCliente_usuario_meuapp
}).then(resposta =>{

    if (resposta.ok){

        resposta.json().then(json =>{
            sessionStorage.idProduto_usuario_meuapp = json.fkProduto;
            
        })
    }
    else{
        alert(`erro ao pegar produto`);
        window.location.href = 'Login.html'
    }

})}

window.onload = function(){
    pegarProdutos()
}