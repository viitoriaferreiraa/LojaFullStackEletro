-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18-Dez-2020 às 23:46
-- Versão do servidor: 10.4.16-MariaDB
-- versão do PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL,
  `categoria` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `categoria`) VALUES
(1, 'Geladeira'),
(2, 'Fogão'),
(3, 'Microondas'),
(4, 'Lava Roupas'),
(5, 'Lava Louças');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `msg` varchar(300) DEFAULT NULL,
  `data` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`id`, `nome`, `msg`, `data`) VALUES
(1, 'Vitória Katerine Ferreira', 'Quero uma geladeira.', '2020-12-04 16:40:19'),
(2, 'Gisele Araujo Silva', 'MISERICORDIA, eu quero esse fogão.', '2020-12-04 17:13:29'),
(5, 'Omar Hama', 'Preciso de um fogão para fazer chairito!', '2020-12-04 21:55:50'),
(6, 'Felipe Xuxu', 'Preciso de uma cama, mas vocês não vendem...', '2020-12-04 22:21:57'),
(7, 'José Augusto', 'Eu gostaria de um fogão!', '2020-12-04 22:22:32');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `idproduto` int(11) NOT NULL,
  `nomeProduto` varchar(45) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `preco_venda` decimal(8,2) DEFAULT NULL,
  `imagem` varchar(100) DEFAULT NULL,
  `fk_idcategoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`idproduto`, `nomeProduto`, `descricao`, `preco`, `preco_venda`, `imagem`, `fk_idcategoria`) VALUES
(1, 'geladeira', 'Geladeira Frost Free Brastemp Side Inverse', '3000.00', '2000.00', 'img/gel_brastemp_frost.jpeg', 1),
(2, 'geladeira', 'Geladeira Brastemp Frost Free Branca 350L', '5000.00', '4000.00', 'img/gel_brastemp_side.jpeg', 1),
(3, 'geladeira', 'Geladeira Brastemp Frost Free Duplex 375 litros', '6000.00', '5500.00', 'img/gel_consul_prata.jpeg', 1),
(4, 'fogao', 'Fogão 4 bocas Consul Inox com mesa de vidro', '2000.00', '1000.00', 'img/fog_consul_inox.jpeg', 2),
(5, 'fogao', 'Fogão 4 bocas Atlas Monaco', '2000.00', '1000.00', 'img/fog_atlas_monaco.jpeg', 2),
(6, 'microondas', 'Micro-ondas Consul Inox 32L 220v', '2000.00', '1300.00', 'img/micro_consul_inox.jpeg', 3),
(7, 'microondas', 'Micro-ondas Philco Espelhado 25L 220v', '2500.00', '1000.00', 'img/micro_eletrolux_bco.jpeg', 3),
(8, 'microondas', 'Micro-ondas Eletrolux Branco de 20L', '1100.00', '1000.00', 'img/micro_philco_espelhado.jpeg', 3),
(9, 'lavadoura', 'Lavadoura de Roupas Brastemp 11kg', '1500.00', '1100.00', 'img/lavadora_brastemp.jpeg', 4),
(10, 'lavadoura', 'Lavadoura de Roupas Philco Inverter 12kg', '3000.00', '2800.00', 'img/lavadora_philco_inverter.jpeg', 4),
(11, 'lavaLouca', 'Lava-Louças Eletrolux Inox com 10 serviços', '2890.00', '2600.00', 'img/lava_louca_brastemp.jpeg', 5),
(12, 'lavaLouca', 'Lava-Louças Brastemp compacta 8 serviços', '3000.00', '2800.00', 'img/lava_louca_eletrolux.jpeg', 5);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Índices para tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`idproduto`),
  ADD KEY `fk_idcategoria` (`fk_idcategoria`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idproduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `produto`
--
ALTER TABLE `produto`
  ADD CONSTRAINT `fk_idcategoria` FOREIGN KEY (`fk_idcategoria`) REFERENCES `categorias` (`id_categoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
