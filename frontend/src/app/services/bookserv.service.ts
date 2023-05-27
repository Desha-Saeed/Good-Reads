import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookservService {

  constructor( private http:HttpClient) { }

  getbook(page:number,limit:number){
    return this.http.get(`http://localhost:8000/book/list?page=${page}&limit=${limit} `);
  }

  addbook(data:any){
    
    return this.http.post('http://localhost:8000/book/add',data)
  }
}
