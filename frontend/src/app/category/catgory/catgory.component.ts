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
  limit=5;
  totalPages=0;

  constructor( private categoryserv:CategoryservService){}

  // on reload
    ngOnInit(){
      this.getdata();
    }

    // get data 
    getdata(){
      this.categoryserv.getcategory(this.page ,this.limit).subscribe(async (res:any)=>{
        this.category=res.result
        this.page=res.page;
        this.limit=res.limit;
          this.totalPages= await res.result.length;
        console.log(this.totalPages);
        
      })
    
    
    };

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
      location.reload();
      },(error=>{
        console.log(error);
      }))
        

     

    }
 

}
