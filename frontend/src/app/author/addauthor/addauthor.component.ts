
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorservService } from 'src/app/services/authorserv.service';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent {

  addauthorform!:FormGroup;
   imagefile!:File;

  constructor(private fbuilder:FormBuilder , private authorserv:AuthorservService){
    this.addauthorform=this.fbuilder.group({
      f_name:[null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      l_name:[null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      birth_date:[null,[Validators.required]],
      photo:['']
    })
  }

   addphoto(event:any){
    if(event.target.files.length>0){
      this.imagefile=event.target.files[0];

      this.addauthorform.patchValue({
        photo:this.imagefile
      });
    }
  }

   addauthor(){

        const formdata=new FormData();
        formdata.append('f_name',this.addauthorform.get('f_name')?.value)
        formdata.append('l_name',this.addauthorform.get('l_name')?.value)
        formdata.append('birth_date',this.addauthorform.get('birth_date')?.value)
        formdata.append('photo',this.imagefile)
          console.log(formdata.get('photo'));
          
        this.authorserv.addauthor(formdata).subscribe(res=>{
          console.log(res);
          location.replace('/admin/author');
        },error=>{
          console.log(error);
          
        });
     
      
  }

}
