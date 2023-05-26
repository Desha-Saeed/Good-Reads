import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthorservService } from 'src/app/services/authorserv.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

  authors:any;


  constructor( private authorserv:AuthorservService , private router:Router){}

  ngOnInit(){
    this.authorserv.getauthor().subscribe(res=>{
        this.authors=res;
    })
  }

  moveto(id:number){
    console.log(id);
    
    this.router.navigate(['editauthor',id]);
  }


  editauthor(elm:any){
   
  }
 

  delete(id:any){
       this.authorserv.deletauthor(id).subscribe(res=>{
        console.log(res);
        
       });
      
  }
  

}
