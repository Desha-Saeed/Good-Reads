import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookservService {

  constructor( private http:HttpClient) { }

  getbook() :Observable <any> {
     return this.http.get(`http://localhost:4000/book `);
    // return this.http.get(`http://localhost:8000/book`);
  }

  addbook(data:any) :Observable <any>{
    
    return this.http.post('http://localhost:4000/book',data)
  }

  deletebook(id:any) :Observable <any>{
    return this.http.delete(`http://localhost:4000/book/${id}`);
  }

  editbook(data:any) :Observable <any>{
    return this.http.put(`http://localhost:4000/book/`,data);
  }

  searchbook(id:any) :Observable <any>{
    return this.http.get(`http://localhost:4000/book/${id} `);
  }

  getbookState(id:any) :Observable <any>{
    return this.http.get(`http://localhost:4000/status/${id}`);
  }

  getRate(id:any) :Observable <any>{
    return this.http.get(`http://localhost:4000/rate/${id}`);
  }
}
