<?php
$host="localhost";
$dbname="film";
$user="root";
$password="";

try{
    $pdo=new PDO("mysql:host=$host;dbname=$dbname",$user,$password);

    $pdo->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);

}catch(PDOException $e){
    die("erreur de connexion : " .$e->getMessage());
}



?>