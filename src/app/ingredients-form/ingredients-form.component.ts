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
export class CreateIngredientRecipeComponent {

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) {
  }

  // 1. Pour creer un ingredient :
  id: any
  ingredients: any


  ingredient = {

    id_recette: '',
    id: 0,
    titre: '',
    unite: '',
    quantite: ''

  }


  getRecipeId(){
    return this.route.snapshot.paramMap.get('recipeId')
  }


  formulaire(form: NgForm) {
    // console.log(form.value)

    const id_current_recette = this.getRecipeId();

    if (id_current_recette != null) {

      const data = {
        id_recette: id_current_recette,
        id: 0,
        titre: form.value.titre,
        unite: form.value.unite,
        quantite: form.value.quantite
      }

      // console.log(data)

      this.http.postData('ingredient', data as any).subscribe({
        next: (data) => console.log("ok"),
        error: (err: Error) => console.log(err),
        complete: () => {

          // console.log('Ingredient ajouté')

          this.updateRecipeIngredientsFromBack()

        }
      });

    }

  }

// 2. delete ingredient :
  delete(id: any){
    
    this.http.deleteData('ingredient', id).subscribe({
      next: () => this.updateRecipeIngredientsFromBack(),
      error: (err: Error) => console.log(err),
      complete: () => {
        console.log('ingredient supprimée'),
        this.updateRecipeIngredientsFromBack()
      }
    });

  }
  

  ngOnInit() {
    
    this.updateRecipeIngredientsFromBack()


  // Capte les param pour la modif :
console.log('ingredient_id :', this.getIngredientId())

    if (this.getIngredientId() != null) {

      this.http.getData('ingredient', this.getIngredientId()).subscribe({
        next: (data) => {
          this.ingredient = data
          console.log('ingredient:', this.ingredient)
        },

        error: (err: Error) => console.log(err),
        complete: () => console.log('Observer got a complete notification')
      });


    }

  }
  


  updateRecipeIngredientsFromBack() {

    const id_current_recette = this.getRecipeId();

    this.http.getFilteredData('ingredient', id_current_recette).subscribe({
      next: (data) => {
        this.ingredients = data
        console.log(data)
      },
      error: (err: Error) => console.log(err),
      complete: () => console.log('Observer got a complete notification')
    })
  }



  // 4. Modifier ingredient :
  getIngredientId(){
    return this.route.snapshot.paramMap.get('ingredientId')
  }


  

}