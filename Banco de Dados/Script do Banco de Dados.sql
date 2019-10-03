 create table Cliente(
  idCliente int primary key,
  Nome varchar(30),
  CPF varchar(12),
  Telefone varchar(12),
  Estado varchar(2),
  Cidade varchar(30),
  Bairro varchar(40),
  Rua varchar(40),
  Numero varchar(40),
  Pais varchar(30),
  fkProduto int
 );
 
 create table Produto(
 idProduto int primary key,
 reg_umidade decimal (5,2),
 reg_temperatura decimal (4,2),
 reg_temporal datetime,
 fkPlanta int
 );
 
 create table Planta(
 idPlanta int primary key,
 Nome varchar(30),
 temperatura_ideal decimal (4,2),
 umidade_ideal decimal (5,2),
 informação varchar (200),
 );
 
 alter table Produto add foreign key (fkPlanta) references Planta(idPlanta);
 alter table Cliente add foreign key (fkProduto) references Produto(idProduto);
 insert into Cliente values
 (1, 'Maria Almeida', '873286356-01', '94002-8922', 'SP', 'Santo André', 'Palmares', 'Tamboriú', '143', 'Brasil', 101),
 (2, 'José Rodriguez', '247356781-63', '92563-1679', 'RJ', 'Rio de Janeiro', 'Copacabana', 'Marquês de Sá', '678', 'Brasil', 102),
 (3, 'Juan Botelho', '764862784-91', '98923-2681', 'WS', 'Olympia', 'West Field', 'Lincon St.', '4352', 'Estados Unidos', 103);
 select * from Cliente;
 insert into Produto values
 (101, 25304, 1254, '2008-11-11 13:23:44', 201),
 (102, 15605, 3546, '2008-11-11 13:23:44', 202),
 (103, 34673, 2590, '2008-11-11 13:23:44', 203);
 insert into Planta values
 (201, 'arruda',56474,2415, 'Necessário 3H de sol por dia'),
 (202, 'salsinha',19734,1890, 'Não pode ficar recebendo ventanias muito fortes'),
 (203, 'rúcula',76694,2610, 'Necessário plantar em terra roxa'),
