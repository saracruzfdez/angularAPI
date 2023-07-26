import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor() {

  }

  recipes: any = Array();

  createRecipe(recipe: JSON): any {

    // sessionStorage.removeItem('recipes')

    if (!sessionStorage.getItem('recipes')) {

      let finalRecipe = { id: 1, ...recipe };

      this.recipes.push(finalRecipe);

      // return this.recipes;

      sessionStorage.setItem('recipes', JSON.stringify(this.recipes))

    } else {

      this.recipes = JSON.parse(sessionStorage.getItem('recipes')!);

      // on récupère le dernier objet de notre tableau grace à slice (-1)
      // qui recree un tableau avec le nombre d'entrées demandées (ici 1)
      // on accede à son indice donc ici 0 puis à sa propriété id
      // on incrémente d'1 pour créer le prochain id :

      let id = this.recipes.slice(-1)[0]['id'] + 1;

      this.recipes.push({ id, ...recipe });

      // on reafecte la session :
      sessionStorage.setItem('recipes', JSON.stringify(this.recipes))

      // console.log(sessionStorage.getItem('recipes'))

    }

  }









  readRecipes() {

    return JSON.parse(sessionStorage.getItem('recipes')!);

  }



  





  updateRecipe(recette: JSON, id: any) {

    this.recipes = JSON.parse(sessionStorage.getItem('recipes')!);

    for (let i = 0; i < this.recipes.length; i++) {

      if (this.recipes[i]['id'] == id) {

        this.recipes[i] = { id: id, ...recette }

        sessionStorage.setItem('recipes', JSON.stringify(this.recipes))

      }

    }

  }









  readOneRecipe(id: any) {

    this.recipes = JSON.parse(sessionStorage.getItem('recipes')!);

    for (let i = 0; i < this.recipes.length; i++) {

      if (this.recipes[i]['id'] == id) {

        return this.recipes[i];

      }

    }

  }








  deleteRecipe(id: any) {

    this.recipes = JSON.parse(sessionStorage.getItem('recipes')!);

    if (this.recipes.length != 1) {

      for (let i = 0; i < this.recipes.length; i++) {

        if (this.recipes[i]['id'] == id) {

          this.recipes.splice(i, 1)

          sessionStorage.setItem('recipes', JSON.stringify(this.recipes))

        }

      }

    } else {

      sessionStorage.removeItem('recipes')

    }

  }

}