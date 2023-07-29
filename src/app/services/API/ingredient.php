<?php 

require_once 'init.php';

if($_GET['action']=='create'){

    $data=json_decode(file_get_contents('php://input'),true);

    $sql="replace INTO ingredient (id, titre, unite, id_recette, quantite) VALUES (:id, :titre, :unite, :id_recette, :quantite)";

    $result= $pdo->prepare($sql);
    $result->execute($data);    

    echo json_encode($data);

}


if ($_GET['action']=='readAll'){

    $sql="SELECT i.*, r.titre as recette FROM recette r INNER JOIN ingredient i ON i.id_recette=r.id";

    $result= $pdo->prepare($sql);
    $result->execute();    
    $data=$result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);

}










?>