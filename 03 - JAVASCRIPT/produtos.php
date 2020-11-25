<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Full Stack Electro</title>
  <link rel="stylesheet" type="text/css" href="./css/estilo.css">
  <script src='js/funcoes.js'></script>
</head>
<body>
  <!--Início Menu-->
  <nav class="menu">                   
    <a href="index.php"><img src="./img/logo01.gif" alt="Full Stack Electro"></a>
    <a href="produtos.php">Nossos Produtos</a>
    <a href="loja.php">Nossas Lojas</a>
    <a href="contato.php">Fale Conosco</a>          
  </nav>              
  <!--Fim Menu-->

  <h1>Produtos</h1><hr>
    
  <section class='categorias'>
    <h3>Categorias</h3>
    <ul>
      <li onclick="exibir_todos()">Todos(12)</li>
      <li onclick="exibir_categoria('geladeiras')">Geladeiras (03)</li>
      <li onclick="exibir_categoria('fogoes')">Fogões (02)</li>
      <li onclick="exibir_categoria('microondas')">Microondas(03)</li>
      <li onclick="exibir_categoria('lavadouraDeRoupa')">Lavadoura de Roupa (02)</li>
      <li onclick="exibir_categoria('lavaLoucas')">Lava-Louças (02)</li>
    </ul>
  </section>

  <section class="produtos">
  <div class='boxProduto'id='geladeiras' style='display:inline-block'>
    <img class="imgProduto" src="./img/gel_brastemp_frost.jpeg" onclick="destaque(this)"><br>
    <p class='descricao'>Geladeira Frost Free Brastemp Side Inverse</p><hr>
    <p class='descricaoPreco'>R$3.000</p>
    <p class="desconto">R$2.000</p><br>
  </div>
  <div class='boxProduto' id='geladeiras'style='display:inline-block'>
    <img class="imgProduto" src='./img/gel_brastemp_side.jpeg' onclick="destaque(this)" ><br>
    <p class='descricao'>Geladeira Brastemp Frost Free Branca 350L</p><hr>
    <p class='descricaoPreco'>R$5.000</p>
    <p class='desconto'>R$4.000</p><br>
  </div>
  <div class='boxProduto'id='geladeiras'style='display:inline-block'>
    <img  class="imgProduto"src="./img/gel_consul_prata.jpeg" onclick="destaque(this)"><br>
    <p class='descricao'>Geladeira Brastemp Frost Free Duplex 375 litros</p><hr>
    <p class='descricaoPreco'>R$6.000</p>
    <p class='desconto'>R$5.500</p><br>
  </div>         
  <div class='boxProduto'id='fogoes'style='display:inline-block'>
    <img  class="imgProduto" src="./img/fog_consul_inox.jpeg" onclick="destaque(this)" ><br>
    <p class='descricao'>Fogão 4 bocas Consul Inox com mesa de vidro</p><hr>
    <p class='descricaoPreco'>R$2.000</p>
    <p class='desconto'>R$1.000</p><br>
  </div>         
  <div class='boxProduto' id='fogoes'style='display:inline-block'>
    <img class="imgProduto" src="./img/fog_atlas_monaco.jpeg" onclick="destaque(this)"><br>
    <p class='descricao'>Fogão 4 bocas Atlas Monaco com acendimento automático</p><hr>
    <p class='descricaoPreco'>R$2.000</p>
    <p class='desconto'>R$1.000 </p><br>
  </div>          
  <div class='boxProduto'id='microondas'style='display:inline-block'>
    <img  class="imgProduto" src="./img/micro_consul_inox.jpeg" onclick="destaque(this)" ><br>
    <p class='descricao'>Micro-ondas Consul Inox 32L 220v</p><hr>
    <p class='descricaoPreco'>R$2.000</p>
    <p  class='desconto'>R$1.300</p><br>
  </div>        
  <div class='boxProduto'id='microondas'style='display:inline-block'>
    <img  class="imgProduto" src="./img/micro_eletrolux_bco.jpeg" onclick="destaque(this)" ><br>
    <p class='descricao'>Micro-ondas Philco Espelhado 25L 220v</p><hr>
    <p class='descricaoPreco'>R$2.500</p>
    <p class='desconto'>R$1.000</p>
    <br>    
  </div>
  <div class='boxProduto' id='microondas'style='display:inline-block'>
    <img class="imgProduto" src="./img/micro_philco_espelhado.jpeg" onclick="destaque(this)"><br>
    <p class='descricao'>Micro-ondas Eletrolux Branco de 20L</p><hr>
    <p class='descricaoPreco'>R$1.100</p>
    <p class='desconto'>R$1.000</p><br>
  </div>        
  <div class='boxProduto'id='lavadouraDeRoupa'style='display:inline-block'>
    <img class="imgProduto" src="./img/lavadora_brastemp.jpeg" onclick="destaque(this)" ><br>
    <p class='descricao'>Lavadoura de Roupas Brastemp 11kg </p><hr>
    <p class='descricaoPreco'>R$1.500</p>
    <p class='desconto'>R$1.100</p><br>
  </div>          
  <div  class='boxProduto'id='lavadouraDeRoupa'style='display:inline-block'>
  <img  class="imgProduto" src="./img/lavadora_philco_inverter.jpeg" onclick="destaque(this)" ><br>
    <p class='descricao' >Lavadoura de Roupas Philco Inverter 12kg</p><hr>
    <p class='descricaoPreco'>R$3.000</p>
    <p class='desconto'>R$2.800</p><br>
  </div>      
  <div class='boxProduto'id='lavaLoucas'style='display:inline-block'>
    <img  class="imgProduto" src="./img/lava_louca_brastemp.jpeg" onclick="destaque(this)" ><br>
    <p class='descricao'>Lava-Louças Eletrolux Inox com 10 serviços</p><hr>
    <p class='descricaoPreco'>R$2.890</p>
    <p class='desconto'>R$2.600</p><br>
  </div>
  <div class='boxProduto'id='lavaLoucas'style='display:inline-block'>
    <img class="imgProduto" src="./img/lava_louca_eletrolux.jpeg" onclick="destaque(this)"><br>
    <p class='descricao'>Lava-Louças Brastemp compacta 8 serviços </p><hr>
    <p class='descricaoPreco'>R$3.000</p>
    <p class='desconto'>R$2.800<p><br>
  </div>                 
  </section>     
            
  <br><br><br><br>

  <footer class ='rodape'>               
    <p class ="formas_pagamento">
    <b>Formas de Pagamento:</p><br>
    <img class = "rodapeImg" src="./img/pagamento.jpeg">
    <p class="final"> &copy;RecodePro 2020</p>
  </footer>    


</body>
</html>