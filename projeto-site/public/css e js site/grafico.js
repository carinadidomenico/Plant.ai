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
    })
}


var exibiu_grafico = true;

// só mexer se quiser alterar o tempo de atualização
    // ou se souber o que está fazendo!
    function atualizarGrafico() {
        obterDadosGrafico();
        setTimeout(atualizarGrafico, 5000);
    }

    // altere aqui as configurações do gráfico
    // (tamanhos, cores, textos, etc)
    function configurarGrafico() {
        var configurações = {
            responsive: true,
            animation: exibiu_grafico ? false : {duration: 1500},
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Histórico recente de umidade e Temperatura'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: false,
                    position: 'left',
                    id: 'n usado',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'valor',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: true, // only want the grid lines for one axis to show up
                    },
                }],
            }
        };

        exibiu_grafico = true;

        return configurações;
    }

    // altere aqui como os dados serão exibidos
    // e como são recuperados do BackEnd
    function obterDadosGrafico() {

        // neste JSON tem que ser 'labels', 'datasets' etc, 
        // porque é o padrão do Chart.js
        var dados = {
            labels: [],
            datasets: [
                {
                    yAxisID: 'valor',
                    label: 'temperatura(Cº)',
                    borderColor: 'rgb(255,0,0)',
                    backgroundColor: 'rgb(255,0,0)',
                    fill: false,
                    data: []
                },
                {
                    yAxisID: 'valor',
                    label: 'Umidade(%)',
                    borderColor: 'rgb(0,0,200)',
                    backgroundColor: 'rgb(0,0,200)',
                    fill: false,
                    data: []
                }
            ]
        };

        fetch('/leituras/ultimas', { cache: 'no-store' }).then(function (response)
         {
            if (response.ok) {
                response.json().then(function (resposta) {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    resposta.reverse();

                    for (i = 0; i < resposta.length; i++) {
                        var registro = resposta[i];

                        if(registro.fkProduto == select.value){
                             // aqui, após 'registro.' use os nomes 
                        // dos atributos que vem no JSON 
                        // que gerou na consulta ao banco de dados

                        dados.labels.push(registro.momento_grafico);

                        dados.datasets[0].data.push(registro.regTemperatura);
                        dados.datasets[1].data.push(registro.regUmidade);
                        }

                        if (dados.datasets.length == 7){
                            break;
                        }
                
                    }
                    console.log(JSON.stringify(dados));

                    div_aguarde.style.display = 'none';

                    plotarGrafico(dados);
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });

    }

    // só altere aqui se souber o que está fazendo!
    function plotarGrafico(dados) {
        console.log('iniciando plotagem do gráfico...');

        var ctx = canvas_grafico.getContext('2d');
        window.grafico_linha = Chart.Line(ctx, {
            data: dados,
            options: configurarGrafico()
        });
    }