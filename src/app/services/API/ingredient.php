<?php 

require_once 'init.php';

if($_GET['action']=='create'){

    $data=json_decode(file_get_contents('php://input'),true);

    $sql="replace INTO ingredient (id, titre, unite, id_recette, quantite) VALUES (:id, :titre, :unite, :id_recette, :quantite)";

    $result= $pdo->prepare($sql);
    $result->execute($data);    

    echo json_encode($data);

}







if ($_GET['action']=='getFiltered'){

    $sql="SELECT * FROM ingredient WHERE id_recette = :id";

    $result= $pdo->prepare($sql);
    $result->execute(array('id' => $_GET['id']));    
    $data=$result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);

}










?>