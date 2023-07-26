import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  affiche=false;

  recettes = [
    {
      titre: 'Gazpacho',
      descriptif: 'Recette pour l\'hiver',
      ingredients: ['patate', 'fromage', 'oignon', 'lardons', 'crème liquide'],
      difficulte: 'facile',
      prep: '30',
      cuisson: '30',
      cout: 2,
      photo: 'https://images.unsplash.com/photo-1662469838214-a97415cd83fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2F6cGFjaG98ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60',
      etapes: ['faire', 'faire', 'faire', 'faire', 'faire', 'faire',]
    },
    {
      titre: 'Paella',
      descriptif: 'Recette pour l\'hiver',
      ingredients: ['patate', 'fromage', 'oignon', 'lardons', 'crème liquide'],
      difficulte: 'facile',
      prep: '30',
      cuisson: '30',
      cout: 2,
      photo: 'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2019/04/Paella-valenciana.-Receta-tradicional.jpg',
      etapes: ['faire', 'faire', 'faire', 'faire', 'faire', 'faire',]
    },
    {
      titre: 'Tarta de queso',
      descriptif: 'Recette pour l\'hiver',
      ingredients: ['patate', 'fromage', 'oignon', 'lardons', 'crème liquide'],
      difficulte: 'facile',
      prep: '30',
      cuisson: '30',
      cout: 2,
      photo: 'https://images.unsplash.com/photo-1608500218890-c4f9eace0d93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvdXBlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      etapes: ['faire', 'faire', 'faire', 'faire', 'faire', 'faire',]
    },
    {
      titre: 'Cocido',
      descriptif: 'Recette pour l\'hiver',
      ingredients: ['patate', 'fromage', 'oignon', 'lardons', 'crème liquide'],
      difficulte: 'facile',
      prep: '30',
      cuisson: '30',
      cout: 2,
      photo: 'https://plus.unsplash.com/premium_photo-1675707499311-726434ce10fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c291cGV8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60',
      etapes: ['faire', 'faire', 'faire', 'faire', 'faire', 'faire',]
    },
    {
      titre: 'Wok',
      descriptif: 'Recette pour l\'hiver',
      ingredients: ['patate', 'fromage', 'oignon', 'lardons', 'crème liquide'],
      difficulte: 'facile',
      prep: '30',
      cuisson: '30',
      cout: 2,
      photo: 'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2019/04/Paella-valenciana.-Receta-tradicional.jpg',
      etapes: ['faire', 'faire', 'faire', 'faire', 'faire', 'faire',]
    },
    {
      titre: 'Tiramisu',
      descriptif: 'Recette pour l\'hiver',
      ingredients: ['patate', 'fromage', 'oignon', 'lardons', 'crème liquide'],
      difficulte: 'facile',
      prep: '30',
      cuisson: '30',
      cout: 2,
      photo: 'https://images.unsplash.com/photo-1591798455002-5bcec304c86e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvdXBlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      etapes: ['faire', 'faire', 'faire', 'faire', 'faire', 'faire',]
    },
    {
      titre: 'Soupe au pistou',
      descriptif: 'Recette pour l\'hiver',
      ingredients: ['patate', 'fromage', 'oignon', 'lardons', 'crème liquide'],
      difficulte: 'facile',
      prep: '30',
      cuisson: '30',
      cout: 2,
      photo: 'https://images.unsplash.com/photo-1608500218890-c4f9eace0d93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvdXBlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      etapes: ['faire', 'faire', 'faire', 'faire', 'faire', 'faire',]
    },
    {
      titre: 'Grace',
      descriptif: 'Recette pour l\'hiver',
      ingredients: ['patate', 'fromage', 'oignon', 'lardons', 'crème liquide'],
      difficulte: 'facile',
      prep: '30',
      cuisson: '30',
      cout: 2,
      photo: 'https://images.unsplash.com/photo-1565548058679-92505f4fad6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvdXBlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      etapes: ['faire', 'faire', 'faire', 'faire', 'faire', 'faire',]
    },
     
  ]

}
