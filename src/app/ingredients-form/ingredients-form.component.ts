import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
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

ingredient={
id:0,
titre:'',
unite: '',
id_recette: '',
quantite: ''
}

formulaire(form:NgForm){

  this.http.postData('ingredient',form.value).subscribe({
    next:(data)=>console.log("ok"),
    error:(err: Error)=>console.log(err),  
    complete:()=>console.log('Ingredient ajouté')
  });

}

ngOnInit(){
this.http.getData

}



}
