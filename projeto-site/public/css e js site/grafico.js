var resposta = document.querySelector(".faq-resposta");
var slide = document.querySelector(".slide");



// slide.addEventListener('click', function () {
//     if (resposta.style.height){
//         resposta.style.height = null;
//         resposta.style.padding = null;
//     } else {
//         resposta.style.height = "5rem";
//         resposta.style.padding = ".5rem 1rem";
//     }  
// })

// for(var i = 0; i < slide.lenght; i++) {
//     slide[i].addEventListener('click', function () {
//         if (resposta[i].style.height){
//             resposta[i].style.height = null;
//             resposta[i].style.padding = null;
//         } else {
//             resposta[i].style.height = "5rem";
//             resposta[i].style.padding = ".5rem 1rem";
//         }  
//     })
// }

function pegarProdutos(){
    fetch(`/leituras/ProdutosCli/${email_usuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {

                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                resposta.reverse();

                for (i = 0; i < resposta.length; i++) {
                    var registro = resposta[i];
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                
                    // aqui, após 'registro.' use os nomes 
                    // dos atributos que vem no JSON 
                    // que gerou na consulta ao banco de dados

                    select.innerHTML += `<option value="${registro.idProduto}">${registro.nomePlanta}</option><br>`
                }
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })}