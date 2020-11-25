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

    if(isset($_POST['nome']) && isset($_POST['msg'])){
        $nome = $_POST['nome'];
        $msg = $_POST['msg'];

        // echo $nome.$msg; Teste para conexão BD

        $sql = "insert into comentarios (nome,msg) values ('$nome','$msg')";
        $result = $conn->query($sql);
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
    <link rel="stylesheet" type="text/css" href="./css/contato.css">
</head>
<body>
    <!--Início Menu-->
    <?php
    include ('menu.html');
    ?>       
    <!--Fim Menu-->
    <h1 class="titulo ml-5">Contato</h1>     
    <hr>
    <div class="containerPai ">
    <div  class="container d-flex ">
        <div class="contatos w-25 mt-5">
           <img class="imgContato"src="./img/email.png"alt='logo email'>
           <a class="link text-dark"href="contato@fullstackeletro.com">contato@fullstackeletro.com</a>        
            <img class="imgContato" src="./img/whatsapp.png"alt='Logo Whatsapp'>
            <a class="textoContato text-dark" href="contato(11)8888-8888">(11)8888-8888</a>              
        </div>
     <div class="formContato ml-5 mb-5">    
      <form action="" method="post">
        <div class="formulario w-75  mb-5">
        <h2 class="text text-info">Fale Conosco:</h2>
        <label class="text text-info">Nome:</label>
        <input type="text" name="nome" placeholder="Digíte seu nome">
        <textarea type="text" name="msg" placeholder="Envie-nos uma mensagem"></textarea>
        <input class="btn btn-outline-dark" type="submit" name="submit" value="Enviar" class="botao">
        </div>
      </form>
     </div>
    </div>
    <?php
            
            // consultando tabela banco de dados
            $sql = "select * from comentarios";
            $result = $conn->query($sql);
            
            if ($result->num_rows > 0){
                while ($rows = $result->fetch_assoc()){
                echo "Data: ", $rows['data'],"<br>";
                echo "Nome: ", $rows['nome'],"<br>";
                echo "Mensagem: ", $rows['msg'],"<br>";
                echo "<hr>";
                }
            }else {
                echo "Nenhum comentário ainda!";
            }
            
                ?>
  
     
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