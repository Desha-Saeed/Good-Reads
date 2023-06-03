import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorservService {
  getbook() :Observable <any>{
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  

  getauthor():Observable <any>{

    return this.http.get('http://localhost:4000/author');
  }

  addauthor(data:any):Observable <any>{
   return this.http.post('http://localhost:4000/author',data);
  }

  editauthor(data:any):Observable <any>{

    return this.http.put('http://localhost:4000/author',{
      id:data.get('id'),
      f_name:data.get('f_name'),
      l_name:data.get('l_name'),
      birth_date:data.get('birth_date'),
      photo:data.get('photo')
    })
  }

  findauthor(id:any):Observable <any>{
        return this.http.get('http://localhost:4000/author/'+id)
  }

  deletauthor(id:any){
    return this.http.delete('http://localhost:4000/author/'+id)
}
}
