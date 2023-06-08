import { Component, Input } from '@angular/core';
import { BookservService } from '../services/bookserv.service';
import { Router } from '@angular/router';
import { Books } from '../books';
@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.css']
})
export class BooksCardComponent {
@Input() bookItem !:any;  
constructor(private router :Router){}
redirectToDetails(id:number){
  console.log(id);
  this.router.navigate(['detaies',id])
}

}
