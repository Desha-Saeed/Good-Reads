import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CategoryservService } from 'src/app/services/categoryserv.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  addbook!:FormGroup;

  category:any;
  constructor(private categoryserv:CategoryservService){}

  ngOnInit(){
    this.categoryserv.getcategory().subscribe(res=>{
      this.category=res;
    })
  }

}
