import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryservService } from 'src/app/services/categoryserv.service';

@Component({
  selector: 'app-add-catgory',
  templateUrl: './add-catgory.component.html',
  styleUrls: ['./add-catgory.component.css']
})
export class AddCatgoryComponent {

  addform!:FormGroup;

  result='';

  constructor(private fbulider:FormBuilder , private categoryserv:CategoryservService){

    this.addform=this.fbulider.group({

      category:[null,[Validators.required ,Validators.minLength(3) , Validators.maxLength(10) , Validators.pattern(/^[A-Za-z\s]*$/)]]

    })
  }
 

    add(){
      this.categoryserv.addcategory(this.addform.controls['category'].value).subscribe(data=>{
    
        console.log(data); 
        //  location.reload();
      }
      )
    
    }
    

}
