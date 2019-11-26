var resposta = document.getElementsByClassName("faq-resposta");
var pergunta = document.getElementsByClassName("faq-pergunta");
var slide = document.getElementsByClassName("slide");


// FAQ

for (var i = 0; i < slide.length; i++) {
    slide[i].addEventListener('click', function() {
        for(var i = 0; i < resposta.length; i++) {
            if(resposta[i].style.height) {
                resposta[i].style.height = null;
                resposta[i].style.padding = null;
                pergunta[i].style.borderRadius = "20px";
            } else {
                resposta[i].style.height = "5rem";
                resposta[i].style.padding = ".5rem 1rem";
                pergunta[i].style.borderRadius = "20px 20px 0 0";
            }
        }
    });
}


// TABELA PLANTAS

var listaPlantas = plantas;

    // ORDEM ALFABÉTICA

listaPlantas.tipos.sort((tipo1, tipo2) => {


    if(tipo1.nome.toLowerCase() < tipo2.nome.toLowerCase()){
        return -1
    }
    if(tipo1.nome.toLowerCase() > tipo2.nome.toLowerCase()){
        return 1
    } else {
        return 0
    } 
    
})

const insertTable = (tabela) => {
    
    let tabelas = ''
    tabela.forEach(tipo => {
        
        tabelas += `
        <table>
            <thead>
                <tr>
                    <th>Infos</th>
                    <th>${tipo.nome}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Descrição</td>
                    <td>${tipo.descricao}</td>
                </tr>
                <tr>
                    <td>Temperatura Mínima</td>
                    <td>${tipo.tempMin}</td>
                </tr>
                <tr>
                    <td>Temperatura Máxima</td>
                    <td>${tipo.tempMax}</td>
                </tr>
                <tr>
                    <td>Temperatura Ideal</td>
                    <td>${tipo.tempIdeal}</td>
                </tr>
                <tr>
                    <td>Umidade Mínima</td>
                    <td>${tipo.umiMin}</td>
                </tr>
                <tr>
                    <td>Umidade Máxima</td>
                    <td>${tipo.umiMax}</td>
                </tr>
                <tr>
                    <td>Umidade Ideal</td>
                    <td>${tipo.umiIdeal}</td>
                </tr>
            </tbody>
        </table>
        `
    });
    return tabelas;
}

document.querySelector(".tabelas").innerHTML = insertTable(listaPlantas.tipos);


// BUSCA DE PLANTAS

var pesquisar = document.querySelector(".buscar-planta")

pesquisar.addEventListener('keyup', function() {

    let filtro = listaPlantas.tipos.filter ((item) => {
        let searchInput = pesquisar.value.toLowerCase()
        return item.nome.toLowerCase().includes(searchInput)
    })

    document.querySelector(".tabelas").innerHTML = insertTable(filtro)    
});