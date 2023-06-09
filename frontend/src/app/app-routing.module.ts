import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }from'./login/login.component';
import { FirstsctioComponent } from './firstsctio/firstsctio.component';
import{RegisterComponent}from'./register/register.component';
import { BookComponent } from './books/book/book.component';

import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './books/addbook/addbook.component';
import { EditbookComponent } from './books/editbook/editbook.component';
import { CatgoryComponent } from './category/catgory/catgory.component';
import { AddCatgoryComponent } from './category/add-catgory/add-catgory.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddauthorComponent } from './authors/addauthor/addauthor.component';
import { EditauthorComponent } from './authors/editauthor/editauthor.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AuthorComponent } from './authors/author/author.component';

// import{AuthorsComponent}from './authors/authors.component';
const routes: Routes = [
  {
    path:'books',
    component:BooksComponent   
  },
  
  {path:"",
component:FirstsctioComponent },
  {
   path:"login",
   component: LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:'books',
    component:BooksComponent
  },
  // {
  //   path:'book/:id',
  //   component:SingelBookComponent
  // },
  
  {
    path:'admin/book',
    component:BookComponent
  },
  {
    path:'admin/addbook',
    component:AddbookComponent
  },
  {
    path:'admin/editBook/:id',
    component:EditbookComponent
  },


  {
    path:'admin/category',
    component:CatgoryComponent
  },
  {
    path:'admin/addcategory',
    component:AddCatgoryComponent
  },


  {
    path:'admin/author',
    component:AuthorComponent,
  },
  {
    path:'admin/addauthor',
    component:AddauthorComponent
  },
  {
    path:'admin/editauthor/:id',
    component:EditauthorComponent
  },
  {
    path: "user/home",
    component: UserHomeComponent
  },
  {
    path:'*',
    component:FirstsctioComponent
  },
  {
    path:'authors',
    component:AuthorsComponent
  }
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}