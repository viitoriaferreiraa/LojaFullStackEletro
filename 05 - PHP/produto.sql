create database fseletro;

use fseletro;

create table if not exists produto(
idproduto int not null auto_increment,
nomeProduto varchar(45) not null,
descricao varchar(150) not null,
preco decimal (8,2),
preco_venda decimal(8,2),
imagem varchar (100),
primary key (produtoid)
)default charset = utf8;

insert into produto (nomeProduto,descricao,preco,preco_venda,imagem) values
('geladeira','Geladeira Frost Free Brastemp Side Inverse','3000.00','2000.00','img/gel_brastemp_frost.jpeg'),
('geladeira','Geladeira Brastemp Frost Free Branca 350L','5000.00','4000.00','img/gel_brastemp_side.jpeg'),
('geladeira','Geladeira Brastemp Frost Free Duplex 375 litros','6000.00','5500.00','img/gel_consul_prata.jpeg'),
('fogao','Fogão 4 bocas Consul Inox com mesa de vidro','2000.00','1000.00','img/fog_consul_inox.jpeg'),
('fogao','Fogão 4 bocas Atlas Monaco','2000.00','1000.00','img/fog_atlas_monaco.jpeg'),
('microondas','Micro-ondas Consul Inox 32L 220v','2000.00','1300.00','img/micro_consul_inox.jpeg'),
('microondas','Micro-ondas Philco Espelhado 25L 220v','2500.00','1000.00','img/micro_eletrolux_bco.jpeg'),
('microondas','Micro-ondas Eletrolux Branco de 20L','1100.00','1000.00','img/micro_philco_espelhado.jpeg'),
('lavadoura','Lavadoura de Roupas Brastemp 11kg','1500.00','1100.00','img/lavadora_brastemp.jpeg'),
('lavadoura','Lavadoura de Roupas Philco Inverter 12kg','3000.00','2800.00','img/lavadora_philco_inverter.jpeg'),
('lavaLouca','Lava-Louças Eletrolux Inox com 10 serviços','2890.00','2600.00','img/lava_louca_brastemp.jpeg'),
('lavaLouca','Lava-Louças Brastemp compacta 8 serviços','3000.00','2800.00','img/lava_louca_eletrolux.jpeg');

create table comentarios(
id int auto_increment,
nome varchar(100),
msg varchar(300),
data datetime default now(),
primary key (id)
);