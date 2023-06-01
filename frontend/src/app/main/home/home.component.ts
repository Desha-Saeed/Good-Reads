import { Component } from '@angular/core';
import { BookservService } from 'src/app/services/bookserv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  mybook:any;
  constructor(private bookserv:BookservService){

  }
  
  ngOnInit(){

    this.getbooks();

  }

  getbooks(){
    this.bookserv.getbook(1,20).subscribe((res:any)=>{
      this.mybook=res.result;
      console.log(this.mybook);
      
    })
  }
  All(){

  }
  Reading(){

  }

  notReading(){
    
  }
}
