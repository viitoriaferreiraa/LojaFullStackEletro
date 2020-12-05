<?php

require_once("./Connection.php");

class Content extends Connection{
    public static function getAll() {
        $conn = Connection::getDb();

        $i = 0;

        $stmt = $conn->prepare("SELECT * FROM produto JOIN categorias ON produto.fk_idcategoria = categorias.id_categoria");
        $stmt->execute();

        while($row = $stmt->fetch(PDO::FETCH_OBJ)){

            $json[$i]=
                $row
            ;
            $i++; 
        }

            header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a API
            header("Content-type: application/json"); //Indicação de arquivo JSON 
            echo json_encode($json); 
    }
}