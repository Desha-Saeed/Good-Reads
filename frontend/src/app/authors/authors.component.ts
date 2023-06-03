import { Component } from '@angular/core';
import { AuthorservService } from '../services/authorserv.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
 
    authors! :Array<any>


    constructor(private _AuthorservService: AuthorservService) {}


    ngOnInit() {
      this._AuthorservService.getauthor().subscribe((data) => {
         

        this.authors = data.result

        console.log(this.authors);
        
        
      })
    }
}

