// ICI CEST LE CRUD, A APPELER DANS LE COMPONENT CATEGORY FORM TS

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor() {

  }

  categories: any = Array();

  createCategorie(categorie: JSON): any {

    if (!sessionStorage.getItem('categories')) {

      // console.log("hola")

      let finalCategorie = { id: 1, ...categorie };

      this.categories.push(finalCategorie);

      sessionStorage.setItem('categories', JSON.stringify(this.categories))

      // console.log(sessionStorage.setItem('categories', JSON.stringify(this.categories)))

    } else {

      this.categories = JSON.parse(sessionStorage.getItem('categories')!);

      // on récupère le dernier objet de notre tableau grace à slice (-1)
      // qui recree un tableau avec le nombre d'entrées demandées (ici 1)
      // on accede à son indice donc ici 0 puis à sa propriété id
      // on incrémente d'1 pour créer le prochain id :

      let id = this.categories.slice(-1)[0]['id'] + 1;

      this.categories.push({ id, ...categorie });

      // on reafecte la session :
      sessionStorage.setItem('categories', JSON.stringify(this.categories))

      console.log(sessionStorage.getItem('categories'))

    }

  }







  readCategories() {

    return JSON.parse(sessionStorage.getItem('categories')!);

  }








  updateCategorie(categorie: JSON, id: any) {

    this.categories = JSON.parse(sessionStorage.getItem('categories')!);

    for (let i = 0; i < this.categories.length; i++) {

      if (this.categories[i]['id'] == id) {

        this.categories[i] = { id: id, ...categorie }

        sessionStorage.setItem('categories', JSON.stringify(this.categories))

        // console.log(sessionStorage.setItem('categories', JSON.stringify(this.categories)))
      }

    }

  }







  readOneCategorie(id: any) {

    this.categories = JSON.parse(sessionStorage.getItem('categories')!);

    for (let i = 0; i < this.categories.length; i++) {

      if (this.categories[i]['id'] == id) {

        return this.categories[i];

      }

    }

  }







// DELETE :
  deleteCategorie(id: any) {

    this.categories = JSON.parse(sessionStorage.getItem('categories')!);

    // si mon tableau contient + d'une categorie, alors elimine la dernière

    if (this.categories.length != 1) {

      for (let i = 0; i < this.categories.length; i++) {

        if (this.categories[i]['id'] == id) {

          this.categories.splice(i, 1)

          sessionStorage.setItem('categories', JSON.stringify(this.categories))

        }

      }

    } else {

      // sinon il y a qu'une alor vide le tableau 

      sessionStorage.removeItem('categories')

    }

  }

}