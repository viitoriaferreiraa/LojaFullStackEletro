<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>&#x1F3EA Full Stack Electro</title> 
     <!--Biblioteca JQuery  -->
     <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>

     <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
     
     <script type="text/javascript" src="js/jquery.js"></script> 

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"> 

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="./css/index.css">
    
</head>
<body>
   <!-- Início Menu-->
   <?php
   include ('menu.html');
   ?>  
   <!--Fim Menu -->
<div class="container w-100 ">
   <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/cozinha01.jpg" class="d-block w-100 img-fluid" alt="Cozinha bonita">
      <div class="carousel-caption d-none d-md-block">
        <h1 class="text text-white ">Seja Bem Vindx</h1>
        <h3 class="text text-white ">Aqui em nossa loja, <em> programadores tem desconto </em> nos produtos para sua casa!</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./img/maquina01.jpg" class="d-block w-100 img-fluid" alt="Máquina de lavar bonita">
      <div class="carousel-caption d-none d-md-block">
        <h1 class="text text-white">Aqui sua casa ganha vida.</h1>
        <h3 class="text text-white">Só HOJE máquina de lavar com 50% de Desconto!!</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./img/cozinha05.jpg" class="d-block w-100 img-fluid" alt="Cozinha bonita">
      <div class="carousel-caption d-none d-md-block">
        <h1 class="text text-white">Deixe sua casa com seu estilo.</h1>
        <h3 class="text text-white"> Full Stack Eletro aqui você está em casa!</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./img/cozinha04.jpg" class="d-block w-100 img-fluid" alt="Cozinha bonita">
      <div class="carousel-caption d-none d-md-block">
        <h1 class="text text-white">Venha nos fazer uma visita.</h1>
        <h3 class="text text-white"> Barato msm só Aqui!!</h3>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>
<div>  

   <br><br><br><br>
   <br><br><br><br> 
   <br><br><br><br>
   <br><br><br><br>   

  <!-- Footer -->
<footer class="final-fluid font-small bg-warning ">
   <div class="footer-copyright text-center py-3">© 2020 Copyright:
      <a class="text-white"href="https://www.recodepro.org.br/"> Recode-Pro</a>
   </div>
</footer>
<!-- Footer -->

</body>
</html> 