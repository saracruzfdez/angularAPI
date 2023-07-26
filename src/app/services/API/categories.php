<?php 
// on appele pdo :
require_once 'init.php';

if($_GET['action']=='create')
{
// ici on recupere lequivalent dun form.value dans $data :
$data= json_decode(file_get_contents('php://input'), true);

// prepare requete et execute :
$sql="INSERT INTO categorie (titre) VALUES (:titre)";

$resultat=$pdo->prepare($sql);
$resultat->execute($data);

echo json_encode($data);

}





// ON IMPLEMENT L METHODE DE NOTRE API pour READ :

if($_GET['action']=='readAll')
{

// prepare requete et execute :
$sql="SELECT * FROM categorie";

$resultat=$pdo->prepare($sql);
$resultat->execute();
$data=$resultat->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
}





// ON IMPLEMENT L METHODE DE NOTRE API pour delete :
if($_GET['action']=='delete')
{

// prepare requete et execute :
$sql="DELETE FROM categorie WHERE id=:id";

$resultat=$pdo->prepare($sql);
$resultat->execute([':id'=>$_GET['id']]);

echo json_encode($resultat);
}