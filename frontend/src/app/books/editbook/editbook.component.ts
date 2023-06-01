import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthorservService } from 'src/app/services/authorserv.service';
import { BookservService } from 'src/app/services/bookserv.service';
import { CategoryservService } from 'src/app/services/categoryserv.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent {

  editBookForm!:FormGroup;
  book:any;
  categories!:any[];
  authors!:any[];
  imagefile!:File;
 

    constructor(
    private bookserv:BookservService,
    private categoryserv:CategoryservService ,
    private authorserv:AuthorservService ,
    private activeroute:ActivatedRoute,
    private fbuilder:FormBuilder){

    this.editBookForm=this.fbuilder.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      photo:['',Validators.required],
      author:['646fa390d9c039ffb5f18ee8',Validators.required],
      category:['646e1b0856c764e318cd1d',Validators.required]
    })
  }


  ngOnInit(){
    this.getbook();
    this.getCategory();
    this.getAuthor();
    
  }

  // get book

  getbook(){
    const id=  this.activeroute.snapshot.params['id'];
    console.log(id);
    
   this.bookserv.searchbook(id).subscribe((res:any)=>{
      this.book=res.result;
      console.log(this.book);
      
      this.editBookForm.patchValue({name:this.book.name,author:this.book.author_id , category:this.book.category_id });
   })
    
  }

  //get category ....
  getCategory(){
    this.categoryserv.getcategory(1,50).subscribe(async (res:any)=>{
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
  
        this.editBookForm.patchValue({
          photo:this.imagefile
        });
      }
    }

    //edit book ....
    editbook(){

      const formdata=new FormData();
      formdata.append('id',this.book._id);
      formdata.append('name',this.editBookForm.get('name')?.value);
      formdata.append('category_id',this.editBookForm.get('category')?.value);
      formdata.append('author_id',this.editBookForm.get('author')?.value);
      formdata.append('photo',this.imagefile);
        
        console.log(formdata.get('photo'));
        console.log(formdata.get('name'));
        console.log(formdata.get('category_id'));
        console.log(formdata.get('author_id'));
       
        
      this.bookserv.editbook(formdata).subscribe((res)=>{
        console.log('data sent');
         location.replace('/admin/book');
      },
      (error)=>{
        console.log(error);
        
      });

    }


    showcat(event:any){
        this.editBookForm.patchValue({
          category:event.target.value
        });

        console.log(this.editBookForm.get('category')?.value);
        
        
    }

    showauth(event:any){
       console.log(event.target.value);
      this.editBookForm.patchValue({
        author:event.target.value
      });
      
  }



}
