import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../services/API/http.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categories: any

  constructor(private http: HttpClient, private httpService: HttpService) { }


  delete(id: any) {

    this.categories = this.httpService.deleteData("categorie", id).subscribe({

      next: () => this.getData(),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')

    });
  }


  getData() {

    this.categories = this.httpService.getData("categorie").subscribe({

      next: (data: string) => this.categories = data,
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')

    });

  }
  

  // ajouté ds l'import en haut
  ngOnInit(): void {

    this.getData();

  }

}