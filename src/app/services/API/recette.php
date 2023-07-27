<?php  

require_once 'init.php';

if ($_GET['action']=='create'){

    $data=json_decode(file_get_contents('php://input'),true);

    $sql="replace INTO recette (id, titre, description, cout, tempsprep, tempscuisson, difficulte, id_categorie, photo) VALUES (:id, :titre, :description, :cout, :tempsprep, :tempscuisson, :difficulte, :id_categorie, :photo)";

    $result= $pdo->prepare($sql);
    $result->execute($data);    

    echo json_encode($data);

}


if ($_GET['action']=='readAll'){

    $sql="SELECT r.*,c.titre as categorie FROM categorie c INNER JOIN recette r ON r.id_categorie=c.id";

    $result= $pdo->prepare($sql);
    $result->execute();    

    $data=$result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);

}


if ($_GET['action']=='readOne'){

    $sql="SELECT r.*,c.titre as categorie FROM categorie c INNER JOIN recette r ON r.id_categorie=c.id WHERE r.id=:id";

    $result= $pdo->prepare($sql);
    $result->execute(['id'=>$_GET['id']]);    

    $data=$result->fetch(PDO::FETCH_ASSOC);

    echo json_encode($data);

}


if($_GET['action']== 'delete'){
    $data=json_decode(file_get_contents('php://input'),true);

    $sql="DELETE FROM recette WHERE id=:id";

    $result= $pdo->prepare($sql);
    $result->execute(['id'=>$_GET['id']]);
    echo json_encode($result);    
}
