create database Plant_ai;
use Plant_ai;
create table Cliente 
(
	idCliente int primary key auto_increment,
    nome varchar (80),
    CPF varchar (12),
    email varchar (80),
    senha varchar (40),
    conta char(1),
	check (conta = 'p' or conta ='f'),
    estado char (2),
    cidade varchar (50),
    bairro varchar (50),
    rua varchar (50),
    número int
)auto_increment = 1;

create table Produto
(
	idProduto int primary key auto_increment,
	tipoDeVaso int,
    check(tipoDeVaso = 1 or tipoDeVaso = 2 or tipoDeVaso = 3),
	regUmidade int,
	regTemperatura int,
	regTemporal datetime
)auto_increment = 101;

create table Planta
(
	idPlanta int primary key auto_increment,
    nome varchar (50),
    tempMínima float,
    priQuartilTemp float,
    tempIdeal float,
    terQuartilTemp float,
    tempMáxima float,
    umiMínima float,
    umiPriQuartil float,
    umiIdeal float,
    umiTerQuartil float,
    umiMáxima float,
    informação varchar (200)
)auto_increment = 201;

insert into Cliente values
(null, 'Samuel Theo Erick Viana', '695391950-71', 'samueltheoerickviana@land.com.br', 'mj7N56Y0fZ', 'p', 'MT', 'Várzea Grande', 'Vitória Régia', 'Avenida Leoncio Lopes', 241);
insert into Cliente values
(null, 'Nathan Thiago Hugo Caldeira', '433169351-18', 'hugocaldeira@dpauladecor.com.br', 'KU5igii0Hq', 'f', 'AP', 'Macapá', 'Novo Buritizal', 'Avenida Armando Limeira', 287),
(null, 'Roberto Carlos da Luz', '769145367-16', 'robertocarlosdaluz@semco.com.br', 'm9WJU72ag8', 'p', 'SC', 'Brusque', 'Rio Branco', 'Rua Claudino Huber', 745);

insert into Produto values
(null, 1, 40, 22, '2019-10-21 12:00:00'),
(null, 2, 67, 36, '2019-10-21 12:00:00'),
(null, 3, 88, 19, '2019-10-21 12:00:00');

insert into Planta values
(null, 'Tomate', 10, 16, 22, 28, 34, 60, 65, 70, 75, 80, ''),
(null, 'Morango', 9, 14.25, 19.5, 24.75, 30, 60, 63.75, 67.5, 71.25, 75, ''),
(null, 'Salsa', 8, 12, 16, 20, 24, null, null, null, null, null, ''),
(null, 'Pimenta', 18, 22.25, 26.5, 30.75, 35, 80, 82, 84, 86, 88, ''),
(null, 'Orquídea', 15, 20, 25, 30, 35, 60, 65, 70, 75, 80, '');