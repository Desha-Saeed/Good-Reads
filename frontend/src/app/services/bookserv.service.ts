import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookservService {

  constructor( private http:HttpClient) { }

  getbook(){
    return this.http.get('http://localhost:8000/book/list');
  }

  addbook(data:any){
    
    return this.http.post('http://localhost:8000/book/add',{  })
  }
}
