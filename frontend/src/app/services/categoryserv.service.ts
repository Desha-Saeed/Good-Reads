import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryservService {

  constructor(private http:HttpClient) { }

  getcategory(page:number,limit:number){
   return this.http.get(`http://localhost:4000/category?page=${page} & limit=${limit}`);
  }



  addcategory(data:any){
   
    
   return this.http.post('http://localhost:4000/category/',{name: data  });

  }


  editcategory(data:any){

    return this.http.put('http://localhost:4000/category/',data)
  }


  deletecategory(id:any){

    return this.http.delete('http://localhost:4000/category/'+id);

  }
}
