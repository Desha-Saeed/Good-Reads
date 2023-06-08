import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  books! :Array<any>
  selectedbook : any;
constructor(private activatedRouter :ActivatedRoute  ){}
ngOnInit(){
  console.log(this.activatedRouter.snapshot.params['id'])
  this.selectedbook =  this.books.find(book=> book.id == this.activatedRouter.snapshot.params['id'])

}
}
