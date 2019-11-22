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