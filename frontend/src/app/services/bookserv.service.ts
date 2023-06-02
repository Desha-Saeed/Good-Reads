import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookservService {

  constructor( private http:HttpClient) { }

  getbook(){
     return this.http.get(`http://localhost:4000/book `);
    // return this.http.get(`http://localhost:8000/book`);
  }

  addbook(data:any){
    
    return this.http.post('http://localhost:4000/book',data)
  }

  deletebook(id:any){
    return this.http.delete(`http://localhost:4000/book/${id}`);
  }

  editbook(data:any){
    return this.http.put(`http://localhost:4000/book/`,data);
  }

  searchbook(id:any){
    return this.http.get(`http://localhost:4000/book/${id} `);
  }

  getbookState(id:any){
    return this.http.get(`http://localhost:4000/status/${id}`);
  }

  getRate(id:any){
    return this.http.get(`http://localhost:4000/rate/${id}`);
  }
}
