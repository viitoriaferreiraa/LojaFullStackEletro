create table pedido (
pedidoid int not null auto_increment,
nomeCliente varchar(60) not null,
endereco varchar(150),
telefone varchar(20),
nomeProduto varchar(15),
valorUnitario int,
quantidade int,
valorTotal decimal(8,2),
primary key (pedidoid)
)default charset = utf8;

insert into pedido values
(default,'Vitória Ferreira', 'Jd Vista Bela, 54','9999-9999','geladeira','2000.00','1','2000.00'),
(default,'Nina Aquino', 'Jd Aurora, 154','8888-9999','microondas','1000.00','2','2000.00'),
(default,'Jaqueline Silva', 'Vila São José, 200','7777-7777','lavadoura','2800.00','1','2800.00'),
(default,'Augusto Filho', 'Jd Itaquera, 87','5555-5555','fogao','1000.00','1','1000.00');

select * from pedido;
