<?php

require_once('./Models/Msg.php');

$name = $_POST['nome'];
$msg = $_POST['msg'];
$message = new Mensagem($name, $msg);

$validate = $message->sentMsg(); 

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

if ($validate ){
    echo json_encode(true);
} else {
    echo json_encode(false);
}