import { Component } from '@angular/core';
import { HttpService } from '../services/API/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.css']
})

export class OneRecipeComponent {

  id: any
  recette: any

  constructor(private http: HttpService, private router: ActivatedRoute) {

    this.id = this.router.snapshot.paramMap.get('id')

    this.http.getData('recette', this.id).subscribe({

      next: (data) => this.recette = data,
      error: (err) => console.log('erreur observer:' + err),
      complete: () => console.log('recette chargée')
    })
  }

  // RENDRE DINAMIQUE :
  nbPersonne: number = 1
  prix: any

  ingredients: any = [
    {
      id: 1,
      titre: 'oeufs',
      unite: 'u',
      quantite: '2',
    },
    {
      id: 2,
      titre: 'lait',
      unite: 'l',
      quantite: '2',
    },
    {
      id: 3,
      titre: 'farine',
      unite: 'gr',
      quantite: '200',

    },
    {
      id: 4,
      titre: 'sel',
      unite: 'pincees',
      quantite: '2',

    }
  ]

}