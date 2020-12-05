<?php

require_once("./Connection.php");

class Mensagem extends Connection {
    private $name;
    private $msg;

    public function Mensagem($name, $msg){
        $this->name = $name;
        $this->msg = $msg;
    }

    public function getName(){
        return $this->name;
    }
    
    public function setName($name){
        $this->name =$name;
    }
    
    public function getMsg() {
        return $this->msg;
    }
    
    public function setMsg($msg){
        $this->msg =$msg;
    }
    public static function getAll() {
        $conn = Connection::getDb();

        $i = 0;

        $stmt = $conn->query("SELECT * FROM comentarios");

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

    public function sentMsg()
    {
        $conn = Connection::getDb();
        $stmt = $conn->query("INSERT INTO comentarios(nome, msg) VALUES ('$this->name', '$this->msg')");
        
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }
}