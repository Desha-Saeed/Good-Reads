import { Component } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {


  items: any[]=[]; // your list of items
  currentPage = 1; // start with the first page
  itemsPerPage = 5; // show 5 items per page
}
