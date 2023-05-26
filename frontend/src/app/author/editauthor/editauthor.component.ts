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
  constructor(private fbulider:FormBuilder , private authorserv:AuthorservService , private activeroute:ActivatedRoute){

    this.editauthorform=this.fbulider.group({

      f_name:[null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      l_name:[null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      photo:[null,[Validators.required]],
      birth_date:[null,[Validators.required]]

    })

  }

 async ngOnInit(){
    this.id= await this.activeroute.snapshot.params['id'];

    this.authorserv.findauthor(this.id). subscribe(res=>{
      this.data=  res
      console.log(this.data);
    });

   
  }


  editauthor(){

    // this.authorserv.editauthor(this.data).subscribe(res=>{
    //   console.log(res);
      
    // });

  }

}
