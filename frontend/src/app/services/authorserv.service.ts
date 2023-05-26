import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorservService {

  constructor(private http:HttpClient) { }

  

  getauthor(){

    return this.http.get('http://localhost:8000/author/list');
  }

  addauthor(data:any){
   return this.http.post('http://localhost:8000/author/add',data);
  }

  editauthor(data:any){

    return this.http.put('http://localhost:8000/author/edit',{
    _id:data._id,
    f_name:data.f_name,
    l_name:data.l_name,
    birth_date:data.birth_date,
    photo:data.photo
        
    })
  }

  findauthor(id:any){
        return this.http.get('http://localhost:8000/author/search/'+id)
  }

  deletauthor(id:any){
    return this.http.delete('http://localhost:8000/author/delete/'+id)
}
}
