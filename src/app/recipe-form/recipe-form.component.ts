import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecetteService } from '../services/recette.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {
  constructor(private rs: RecetteService, private router: Router, private route: ActivatedRoute) {

  }

  // Ajout ? ou Modif ? -> :
  id: string | null = '0';
  recette = {

    titre: '',
    descriptif: '',
    ingredients: '',
    difficulte: '',
    prep: '',
    cuisson: '',
    cout: '',
    photo: '',
    etapes: []
  }


  formulaire(form: NgForm, id: any) {
// return console.log(id);

    if(id==null)
   {

     let test = this.rs.createRecipe(form.value);

   } else {

    this.rs.updateRecipe(form.value, id);

   }
   
    this.router.navigate(['listRecipe']);
    // console.log(test);

  }

  

  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {

      this.recette = this.rs.readOneRecipe(this.id)

    }
  }
}
