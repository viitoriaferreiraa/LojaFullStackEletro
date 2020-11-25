<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full Stack Electro</title>
    <link rel="stylesheet" type="text/css" href="./css/estilo.css">
</head>
<body>
    <!--Início Menu-->
    <nav  class="menu">                   
      <a href="index.php"><img src="./img/logo01.gif" alt="Full Stack Electro"></a>
      <a href="produtos.php">Nossos Produtos</a>
      <a href="loja.php">Nossas Lojas</a>
      <a href="contato.php">Fale Conosco</a>          
    </nav>       
    <!--Fim Menu-->
    <h1>Contato</h1>     
    <hr>
    <div  class="contato" >
        <div class="email">
           <img src="./img/email.png"alt='logo email'>
           <a href="contato@fullstackeletro.com">contato@fullstackeletro.com</a> 
        </div>  
        <div class="whats" >
            <img class="imgContato" src="./img/whatsapp.png"alt='Logo Whatsapp'>
            <a class="textoContato" href="contato(11)8888-8888">(11)8888-8888</a>              
    </div>    
    <form>
        <div class="formulario">
        <h2>Fale Conosco:</h2>
        <label>Nome:</label> <input type="text" placeholder="Digite seu nome">
        <label>E-mail:</label><input type="text" required="required" placeholder="Digite seu email">
        <textarea placeholder="Envie-nos uma mensagem"></textarea>
        <input type="button" value="Enviar" class="botao">
        </div>
    </form>
  
     
     <br><br><br><br>
     
    
    <footer class='rodape'>               
        <p class="formas_pagamento">
        <b>Formas de Pagamento:</p><br>
        <img class="rodapeImg" src="./img/pagamento.jpeg">
        <p class="final"> &copy;RecodePro 2020</p>
    </footer>  


</body>
</html>