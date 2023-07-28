import { Component, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncService } from '../services/API/async.service';
import { HttpService } from '../services/API/http.service';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})


export class CategoryFormComponent {

  wait: any
  reponse: any

  // Ajout ? ou Modif ? -> :
  id: string | null = '0';
  categorie = {

    id:0,
    titre: '',

  };

  constructor(private router: Router, private route: ActivatedRoute, private async: AsyncService, private http:HttpService) {}

  formulaire(form: NgForm) {

    this.http.postData('categorie', form.value).subscribe({

      next: (data: string) => console.log(data),
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')

    });

    this.router.navigate(['listCategory'])

  }




  // Capte le param en GET pour la modif :
  ngOnInit() {


    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {


      this.http.getData('categorie', this.id).subscribe({
        next:(data)=>this.categorie=data,
        error:(err: Error)=>console.log(err),
        complete:()=>console.log('Observer got a complete notification')
      
      });

      console.log(this.categorie)

    }

  }

}