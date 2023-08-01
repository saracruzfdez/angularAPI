import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) {
  }

  id: any
  categories: any

  recette = {
    id: 0,
    titre: '',
    id_categorie: '',
    description: '',
    difficulte: '',
    tempsprep: '',
    tempscuisson: '',
    cout: '',
    photo: '',
  }

  formulaire(form: NgForm) {

    console.log(form.value)

    this.http.postData('recette', form.value).subscribe({
      next: (data) => console.log("ok"),
      error: (err: Error) => console.log(err),
      complete: () => console.log('Recette ajoutée')
    });
    this.router.navigate(['listRecipe']);

  }


  ngOnInit() {

    this.http.getData('categorie').subscribe({
      next: (data) => this.categories = data,
      error: (err: Error) => console.log(err),
      complete: () => console.log('Observer got a complete notification')
    });



    // Capte le param en GET pour la modif :

    this.id = this.route.snapshot.paramMap.get('id');
 this.http.getData('recette', this.id).subscribe({
        next: (data) => this.recette = data,
        error: (err: Error) => console.log(err),
        complete: () => console.log('Observer got a complete notification')
      });
    if (this.id != null) {


     


    }


  }
}