import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookservService } from 'src/app/services/bookserv.service';

@Component({
  selector: 'app-singel-book',
  templateUrl: './singel-book.component.html',
  styleUrls: ['./singel-book.component.css']
})
export class SingelBookComponent {
  book:any;
  rate:any;
  constructor(private bookserv:BookservService , private Router:ActivatedRoute){
    
  }
ngOnInit(){
  this.getbook();
  this.getrate();
}
  getbook(){
    const id=  this.Router.snapshot.params['id'];
    console.log(id);
    
    this.bookserv.searchbook(id).subscribe((res:any)=>{
        this.book=res.result;
        console.log(this.book);
        
      })
  }

  getrate(){
    const id=  this.Router.snapshot.params['id'];
    this.bookserv.getRate(id).subscribe((res:any)=>{
        this.rate=res.avg;
    })
  }
 
  

}
