<?php
   $severname = "localhost";
   $username = "root";
   $password = "";
   $database = "fseletro";   
   //Conexão:
   $conn = mysqli_connect($severname,$username,$password,$database);
   //Verificando conexão:
    if(!$conn){
      die("A conexão ao BD falhou: ".mysqli_connect_erro());
    }   
?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>&#x1F3EA Full Stack Electro</title>
   <!--Biblioteca JQuery  -->
   <script type="text/javascript" src="js/jquery.js"></script> 
    <!-- Bootstrap CDN -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"> 
    <!-- CSS -->
  <link rel="stylesheet" type="text/css" href="./css/produtos.css">
  <script src='js/funcoes.js'></script>
</head>
<body>
  <!--Início Menu-->
  <?php
    include ('menu.html');
  ?>              
  <!--Fim Menu-->

  <h1 class="titulo ml-3">Produtos</h1><hr>
<section class="container w-100 d-flex">  
  <section class='container w-25'>
    <h3 class='categoria text-center'>Categorias</h3>
    <div class="list-group ">
      <button type="button" class="list-group-item list-group-item-action list-group-item-warning"onclick="exibir_todos()">Todos(12)</button>
      <button type="button" class="list-group-item list-group-item-action list-group-item-warning" onclick="exibir_categoria('geladeira')">Geladeiras (03)</button>
      <button type="button" class="list-group-item list-group-item-action list-group-item-warning" onclick="exibir_categoria('fogao')">Fogões (02)</button>
      <button type="button" class="list-group-item list-group-item-action list-group-item-warning" onclick="exibir_categoria('microondas')">Microondas(03)</button>
      <button type="button" class="list-group-item list-group-item-action list-group-item-warning" onclick="exibir_categoria('lavadoura')">Lavadoura de Roupa (02)</button>
      <button type="button" class="list-group-item list-group-item-action list-group-item-warning" onclick="exibir_categoria('lavaLouca')">Lava-Louças (02)</button>
    </div>
  </section>

  <section class="produtos ">
  <?php
  // consulta da tabela BD
   $sql = "select * from produto";
   $result = $conn->query($sql);

   if($result->num_rows>0){
     while($rows = $result->fetch_assoc()){
  ?> 
    <div class='boxProduto' id="<?php echo $rows["nomeProduto"]?>" style='display:inline-block'>
    <img class="imgProduto" src="<?php echo $rows["imagem"]?>" onclick="destaque(this)"><br>
    <p class='descricao'><?php echo $rows["descricao"]?></p><hr>
    <p class='descricaoPreco'>R$<?php echo $rows["preco"]?></p>
    <p class="desconto">R$<?php echo $rows["preco_venda"]?></p><br>
    </div>
        
  <?php
     }      
   }else{
     echo "Nenhum produto cadastrado!";
   }  
  ?>  
  </section> 
</section>    
            
  <br><br><br><br>

  
    <!-- Footer -->
<footer class="final-fluid font-small bg-warning ">
    <p class ="formas_pagamento text-center">
    <b>Formas de Pagamento:</p><br>
    <img class = "rodapeImg" src="./img/pagamento.jpeg">
   <div class="footer-copyright text-center py-3">© 2020 Copyright:
      <a class="text-white"href="https://www.recodepro.org.br/"> Recode-Pro</a>
   </div>
</footer>
  <!-- Footer -->


</body>
</html>