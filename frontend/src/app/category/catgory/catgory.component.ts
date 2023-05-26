import { Component } from '@angular/core';
import { CategoryservService } from 'src/app/services/categoryserv.service';

@Component({
  selector: 'app-catgory',
  templateUrl: './catgory.component.html',
  styleUrls: ['./catgory.component.css']
})
export class CatgoryComponent {
  category:any;

  constructor( private categoryserv:CategoryservService){}

  // on reload
    ngOnInit(){
      this.categoryserv.getcategory().subscribe(res=>{
        this.category=res;
      })
    }

    // edit 
    edit(data:any){

    }

    delete(data:any){
      this.categoryserv.deletecategory(data._id).subscribe(res=>{
      console.log(res);
      
      },(error=>{console.log(error);
      }))
        

      location.reload();

    }
 

}
