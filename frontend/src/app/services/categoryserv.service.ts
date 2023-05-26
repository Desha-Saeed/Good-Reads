import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryservService {

  constructor(private http:HttpClient) { }

  getcategory(){
   return this.http.get('http://localhost:8000/category/list');
  }



  addcategory(data:any){
   
    
   return this.http.post('http://localhost:8000/category/add',{name: data  });

  }


  editcategory(data:any){

    return this.http.put('http://localhost:8000/category/add',data)
  }


  deletecategory(id:any){

    return this.http.delete('http://localhost:8000/category/delete/'+id);

  }
}
