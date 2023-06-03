import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { BookservService } from 'src/app/services/bookserv.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  books!: any[] ;
  currentPage = 1; // start with the first page
  itemsPerPage = 5; // show 5 items per page
  constructor(private bookser:BookservService ,private router:Router){}

  ngOnInit(){
  this.getdata();

   
  }

  // get data 
   getdata(){
        this.bookser.getbook().subscribe((res:any)=>{

         console.log(res);
          
        this.books=res.result;
        
      })
   
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
    this.router.navigate(['/admin/editBook',id]);
  }

}
