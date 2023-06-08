import { Component } from '@angular/core';
import { BookservService } from '../services/bookserv.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books! :Array<any>


  constructor(private _BookService: BookservService) {}
  
  
  ngOnInit() {
    this._BookService.getbook().subscribe((data) => {
       
  
      this.books = data.result
  
      console.log(this.books);
      
      
    })
  }

}