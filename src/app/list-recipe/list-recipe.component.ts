import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../services/recette.service';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})


export class ListRecipeComponent {

  constructor(private http: HttpService, private recetteService: RecetteService, private httpService: HttpService){
  }


  recipes:any

delete(id:any){
      this.http.deleteData('recette',id).subscribe({
      next:()=>this.getData(),
      error:(err: Error)=>console.log(err),
      complete:()=>console.log('recette supprimée')});
      } 

  getData(){

      this.http.getData('recette').subscribe({
      next:(data)=>this.recipes=data,
      error:(err)=>console.log('erreur observer:'+err),
      complete:()=>console.log('recettes sont chargées')
      });
    //  console.log(this.recipes);
  }

 ngOnInit(){this.getData();}

}
