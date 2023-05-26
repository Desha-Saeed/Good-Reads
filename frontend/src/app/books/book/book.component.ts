import { Component } from '@angular/core';
import { BookservService } from 'src/app/services/bookserv.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  books:any;
  constructor(private bookser:BookservService){}

  ngOnInit(){

    this.bookser.getbook().subscribe(res=>{
      this.books=res;
      console.log(this.books);
      
    })

  }

}
