<?php 

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; text/html; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//Connexion à la bdd en instantiant notre objet PDO :
$pdo=new PDO('mysql:host=localhost;dbname=marmiton', 'root', '', array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_WARNING, PDO::MYSQL_ATTR_INIT_COMMAND=>'SET NAMES utf8'));

