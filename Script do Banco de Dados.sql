 create table Cliente(
  idCliente int primary key,
  Nome varchar(30),
  CPF int (11),
  Telefone varchar(12),
  Endereco varchar(40),
  Cidade varchar(30),
  Estado varchar(2),
  Pais varchar(30),
  fkProduto int
 );
 
 create table Produto(
 idProduto int primary key,
 Nome varchar(30),
 Reg_Umidade decimal (5,2),
 Reg_Temperatura decimal (4,2),
 fkPlanta int
 );
 
 create table Planta(
 idPlanta int primary key,
 Nome varchar(30),
 Temp_ideal decimal (4,2),
 umid_ideal decimal (5,2),
 informação varchar (200)
 );
 
 alter table Produto add foreign key (fkPlanta) references Planta(idPlanta);
 alter table Cliente add foreign key (fkProduto) references Produto(idProduto);