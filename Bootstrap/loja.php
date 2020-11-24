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
    <link rel="stylesheet" type="text/css" href="./css/loja.css">
</head>
<body>
    <!--Início Menu-->
    <?php
    include ('menu.html');
    ?>       
    <!--Fim Menu-->
    <h1 class="titulo ml-3 ">Nossas Lojas</h1>
    <hr>
    <div class="containerPai d-flex justify-content-center">
    <div class="card ml-5" style="width: 18rem;">
        <img class="card-img-top" src="./img/loja01.jpg" alt="Card image cap">
        <div class="card-body">
           <p class="card-text">           
            <h3>Rio de Janeiro</h3><br>
            Avenida Paulista,5000<br/>
            10°Andar<br />
            Centro<br /> 
            (21)3333-3333<br />            
           </p>
        </div>
   </div>
   <div class="card ml-5" style="width: 18rem;">
        <img class="card-img-top" src="./img/loja02.jpg" alt="Card image cap">
        <div class="card-body">
           <p class="card-text">           
            <h3>São Paulo</h3><br>
            Avenida Presidente Vargas,985<br/>
            10°Andar<br />
            Centro<br /> 
            (21)3333-3333<br />            
           </p>
        </div>
   </div>
   <div class="card ml-5" style="width: 18rem;">
        <img class="card-img-top" src="./img/loja03.jpg" alt="Card image cap">
        <div class="card-body">
           <p class="card-text">           
            <h3>Santa Catarina</h3><br>
            Avenida Presidente Vargas,5000<br/>
            1°Andar<br />
            Centro<br /> 
            (47)3333-3333<br />            
           </p>
        </div>
   </div>
   </div>
    
     <br><br><br><br>
     <br><br><br><br>
     <br><br><br><br>
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