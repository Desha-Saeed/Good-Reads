import { Component } from '@angular/core';
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
  constructor(private bookser:BookservService){}

  ngOnInit(){
  this.getdata();
   
  }

  // get data 
   getdata(){
        this.bookser.getbook(this.page,this.limit).subscribe((res:any)=>{
        this.books=res.data;
        this.page=res.page;
        this.limit=res.limit;
        this.totalPages=res.totalPages;
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




}
