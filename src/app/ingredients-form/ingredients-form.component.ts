import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-ingredients-form',
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.css']
})

// activo los imports tras haber creado el boton ingredientes y la ruta
export class IngredientsFormComponent {

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) {
  }

  // 1. Pour creer un ingredient :
  ingredients: any

  ingredient = {
    id_recette: '',
    id: 0,
    titre: '',
    unite: '',
    quantite: ''
  }

  formulaire(form: NgForm) {
    // console.log(form.value)

    const id_current_recette = this.route.snapshot.paramMap.get('id');

    if (id_current_recette != null) {

      const data = {
        id_recette: id_current_recette,
        id: 0,
        titre: form.value.titre,
        unite: form.value.unite,
        quantite: form.value.quantite
      }

      console.log(data)

      this.http.postData('ingredient', data as any).subscribe({
        next: (data) => console.log("ok"),
        error: (err: Error) => console.log(err),
        complete: () => {

          console.log('Ingredient ajouté')

          this.getRecipeIngredientsFromBack()

        }
      });

    }

  }


  getRecipeIngredientsFromBack() {
    const id_current_recette = this.route.snapshot.paramMap.get('id');

    this.http.getFilteredData('ingredient', id_current_recette).subscribe({
      next: (data) => {
        this.ingredients = data
        console.log(data)
      },
      error: (err: Error) => console.log(err),
      complete: () => console.log('Observer got a complete notification')
    })
  }



  // getData() {

  //   this.http.getData('ingredient').subscribe({
  //     next: (data) => this.ingredients = data,
  //     error: (err) => console.log('erreur observer:' + err),
  //     complete: () => console.log('recettes sont chargées')
  //   });

  //   console.log(this.ingredients);
  // }

  delete(id: any){

    this.http.deleteData('ingredient', id).subscribe({
      next: () => this.getRecipeIngredientsFromBack(),
      error: (err: Error) => console.log(err),
      complete: () => {
        console.log('ingredient supprimée'),
        this.getRecipeIngredientsFromBack()
      }
    });

  }



  ngOnInit() {

    this.getRecipeIngredientsFromBack()

  }

}