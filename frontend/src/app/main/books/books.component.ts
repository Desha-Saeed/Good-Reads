import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookservService } from 'src/app/services/bookserv.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books :any;
  constructor(private bookserv:BookservService , private route:Router){}

  ngOnInit(){
this.getbooks();
  }

  getbooks(){
    this.bookserv.getbook(1,50).subscribe((res:any)=>{
      this.books=res.result;
      console.log(res.result);
      
    },error=>{
      console.log(error);
      
    })
  }

  goToBook(id:any){
      this.route.navigate(['/book',id])
  }

  goToAuthor(id:any){

  }

}
