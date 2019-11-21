var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;

let sessoes = [];
let produtos = [];

/* Recuperar usuário por email e senha */
router.post('/autenticar', function(req, res, next) {
	console.log('Recuperando usuário por email e senha');

	var email = req.body.email; // depois de .body, use o nome (name) do campo em seu formulário de login
	var senha = req.body.senha; // depois de .body, use o nome (name) do campo em seu formulário de login	
	
	let instrucaoSql = `select * from Cliente where email='${email}' and senha='${senha}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);

		if (resultado.length > 1) {
			sessoes.push(resultado[0].dataValues.email);
			console.log('sessoes: ',sessoes);
			res.json(resultado[0]);
		} else if (resultado.length == 0) {
			res.status(403).send('email e/ou senha inválido(s)');
		} 
		
		// else {
		// 	res.status(403).send('Mais de um usuário com o mesmo email e senha!');
		// }	

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

/* Cadastrar usuário */
router.post('/Cadastrar', function(req, res, next) {
	console.log('Criando um usuário');

	var nome = req.body.nome;
	var CPF = req.body.CPF;
	var email = req.body.email;
	var senha = req.body.senha;
	var conta = req.body.conta;
	var estado = req.body.estado;
	var cidade = req.body.cidade;
	var bairro = req.body.bairro;
	var rua = req.body.rua;
	var numeroRua = req.body.numero_Rua;

	let instrucaoSql = `insert into Cliente values (${nome},${CPF},${email},${senha},${conta},${estado},${cidade},${bairro},${rua},${numeroRua});`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);

		if (resultado.length == 1) {
			sessoes.push(resultado[0].dataValues.email);
			console.log('sessoes: ',sessoes);
			res.json(resultado[0]);
		} else if (resultado.length == 0) {
			res.status(403).send('email e/ou senha inválido(s)');
		} else {
			res.status(403).send('Mais de um usuário com o mesmo email e senha!');
		}	

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
	
	// Usuario.create({
	// 	nome : req.body.nome,
	// 	login : req.body.login,
	// 	senha: req.body.senha
	// }).then(resultado => {
	// 	console.log(`Registro criado: ${resultado}`)
    //     res.send(resultado);
    // }).catch(erro => {
	// 	console.error(erro);
	// 	res.status(500).send(erro.message);
  	// });
});


/* Verificação de usuário */
router.get('/sessao/:login', function(req, res, next) {
	let login = req.params.login;
	console.log(`Verificando se o usuário ${login} tem sessão`);
	
	let tem_sessao = false;
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] == login) {
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${login} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
	}
	
});


/* Logoff de usuário */
router.get('/sair/:login', function(req, res, next) {
	let login = req.params.login;
	console.log(`Finalizando a sessão do usuário ${login}`);
	let nova_sessoes = []
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] != login) {
			nova_sessoes.push(sessoes[u]);
		}
	}
	sessoes = nova_sessoes;
	res.send(`Sessão do usuário ${login} finalizada com sucesso!`);
});


/* Recuperar todos os usuários */
router.get('/', function(req, res, next) {
	console.log('Recuperando todos os usuários');
	Usuario.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});


// pegando os produtos do cliente ao entrar
router.post('/produtos', function(req, res,next){
	console.log('pegando produtos do cliente');

	var user = 1;

	let instrucaoSql = `select * from produto where fkCliente = ${user};`
	console.log(instrucaoSql);
})

module.exports = router;
