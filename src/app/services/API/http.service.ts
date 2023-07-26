import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  getData(table: string): Observable<any> {

    return this.http.get('http://localhost/angular/marmiton/src/app/services/API/' + table + '.php?action=readAll')

  }


  deleteData(table: string, id: any): Observable<any> {

    return this.http.post('http://localhost/angular/marmiton/src/app/services/API/' + table + '.php?action=delete&id=' + id, {});

  }


  postData(table: string, data: JSON): Observable<any> {

    return this.http.post('http://localhost/angular/marmiton/src/app/services/API/' + table + '.php?action=create', JSON.stringify(data));

  }

}
