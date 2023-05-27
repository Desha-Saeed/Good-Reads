import { Component } from '@angular/core';
import { CategoryservService } from 'src/app/services/categoryserv.service';

@Component({
  selector: 'app-catgory',
  templateUrl: './catgory.component.html',
  styleUrls: ['./catgory.component.css']
})
export class CatgoryComponent {
  category:any;
  page=1;
  limit=10;
  totalPages=0;

  constructor( private categoryserv:CategoryservService){}

  // on reload
    ngOnInit(){
      this.getdata();
    }

    // get data 
    getdata(){
      this.categoryserv.getcategory(this.page ,this.limit).subscribe((res:any)=>{
        this.category=res.data;
        this.page=res.page;
        this.limit=res.limit;
        this.totalPages=res.totalPages;
      })};

      prevPage(){
        if(this.page>1){
          this.page--;
          this.getdata();
        }
      }
    
    
      // next button
       nextPage(){
       if(this.page<this.totalPages){
        this.page++;
        this.getdata();
       }
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
