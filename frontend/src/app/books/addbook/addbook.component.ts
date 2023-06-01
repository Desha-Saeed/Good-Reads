import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorservService } from 'src/app/services/authorserv.service';
import { BookservService } from 'src/app/services/bookserv.service';
import { CategoryservService } from 'src/app/services/categoryserv.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  addbookform!:FormGroup;
  categories!:any[];
  authors!:any[];
  imagefile!:File;


  constructor(
    private bookserv:BookservService,
    private categoryserv:CategoryservService ,
    private authorserv:AuthorservService ,
    private fbuilder:FormBuilder){

    this.addbookform=this.fbuilder.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      photo:['',Validators.required],
      author:['646fa390d9c039ffb5f18ee8',Validators.required],
      category:['646e1b0856c764e318cd1d',Validators.required]
    })
  }

  ngOnInit(){

    this.getCategory();
    this.getAuthor();
    
  }

  //get category ....
  getCategory(){
    this.categoryserv.getcategory(1,10).subscribe(async (res:any)=>{
      this.categories=await res.result;
    })
  }

    // get author
    getAuthor(){
        this.authorserv.getauthor().subscribe((res:any)=>{
          this.authors=res.result;
        })
    }


    // add photo
    addphoto(event:any){
      if(event.target.files.length>0){
        this.imagefile=event.target.files[0];
  
        this.addbookform.patchValue({
          photo:this.imagefile
        });
      }
    }

    //add book ....
    addBook(){

      const formdata=new FormData();
      formdata.append('name',this.addbookform.get('name')?.value)
      formdata.append('category_id',this.addbookform.get('category')?.value)
      formdata.append('author_id',this.addbookform.get('author')?.value)
      formdata.append('photo',this.imagefile)
        
        console.log(formdata.get('photo'));
        console.log(formdata.get('name'));
        console.log(formdata.get('category_id'));
        console.log(formdata.get('author_id'));
       
        
      this.bookserv.addbook(formdata).subscribe((res)=>{
        console.log('data sent');
        location.replace('/admin/book');
      },
      (error)=>{
        console.log(error);
        
      });

    }


    showcat(event:any){
        this.addbookform.patchValue({
          category:event.target.value
        });

        console.log(this.addbookform.get('category')?.value);
        
        
    }

    showauth(event:any){
       console.log(event.target.value);
      this.addbookform.patchValue({
        author:event.target.value
      });
      
  }

}
