import { Component, Input } from '@angular/core';
import { Books } from '../books';
@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.css']
})
export class BooksCardComponent {
@Input()bookItem !:Books
}
