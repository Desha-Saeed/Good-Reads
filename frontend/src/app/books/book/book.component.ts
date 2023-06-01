import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PagenateInterFace } from 'src/app/interFaces/book/pagenate-inter-face';

import { BookservService } from 'src/app/services/bookserv.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  books:any;
  page=1;
  limit=10;
  totalPages=0;
  constructor(private bookser:BookservService ,private router:Router){}

  ngOnInit(){
  this.getdata();
   
  }

  // get data 
   getdata(){
        this.bookser.getbook(this.page,this.limit).subscribe((res:any)=>{
        this.books=res.result;
        this.page=res.page;
        this.limit=res.limit;
        this.totalPages=res.result.length;
      })
   
   }

   // prev button
   prevPage(){
    if(this.page>1){
      this.page--;
      this.getdata();
    }
  }


  // next button
   nextPage(){
   if(this.page<this.totalPages){
    this.page++;
    this.getdata();
   }
  }

  // delete book
  delete(id:any){
    this.bookser.deletebook(id).subscribe(res=>{
      console.log(res);
       location.reload();
      
    })
    console.log(id);
    
  }

  moveto(id:number){
    this.router.navigate(['editBook',id]);
  }

}
