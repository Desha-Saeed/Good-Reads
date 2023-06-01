import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthorservService } from 'src/app/services/authorserv.service';

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent {

  editauthorform!:FormGroup;
  id:any;
  data:any;
  imagefile!:File;

  constructor(private fbulider:FormBuilder , private authorserv:AuthorservService , private activeroute:ActivatedRoute){

    this.editauthorform=this.fbulider.group({

      f_name:[null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      l_name:[null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      photo:[null,[Validators.required]],
      birth_date:[null,[Validators.required]]

    })

  }

 async ngOnInit(){
   
    this.getauthor();
   
  }

  //get author 
  getauthor(){

    this.id= this.activeroute.snapshot.params['id'];

    this.authorserv.findauthor(this.id). subscribe((res:any)=>{
      this.data=  res.result

      console.log(this.data);
      this.editauthorform.patchValue({
        f_name:this.data.f_name,
        l_name:this.data.l_name,
        birth_date:this.data.birth_date.substring(0,10),
        photo:this.data.photo,
      })
    });

  }



    // add photo
    addphoto(event:any){
      if(event.target.files.length>0){
        this.imagefile=event.target.files[0];
  
        this.editauthorform.patchValue({
          photo:this.imagefile
        });
      }
    }




  editauthor(){

    const formdata=new FormData();
    formdata.append('id',this.data._id);
    formdata.append('f_name',this.editauthorform.get('f_name')?.value);
    formdata.append('l_name',this.editauthorform.get('l_name')?.value);
    formdata.append('birth_date',this.editauthorform.get('birth_date')?.value);
    formdata.append('photo',this.imagefile);
      
      console.log(formdata.get('photo'));
      console.log(formdata.get('f_name'));
      console.log(formdata.get('l_name'));
      console.log(formdata.get('birth_date'));
     
      
    this.authorserv.editauthor(formdata).subscribe((res)=>{
      console.log('data sent');
       location.replace('author');
    },
    (error)=>{
     
      
      console.log(error);
      
    });

  }

}
