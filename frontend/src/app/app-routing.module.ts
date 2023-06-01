import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './books/book/book.component';
import { CatgoryComponent } from './category/catgory/catgory.component';
import { AddCatgoryComponent } from './category/add-catgory/add-catgory.component';
import { AuthorComponent } from './author/author/author.component';
import { AddauthorComponent } from './author/addauthor/addauthor.component';
import { EditauthorComponent } from './author/editauthor/editauthor.component';
import { AddbookComponent } from './books/addbook/addbook.component';
import { EditbookComponent } from './books/editbook/editbook.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'book',
    component:BookComponent
  },
  {
    path:'addbook',
    component:AddbookComponent
  },
  {
    path:'editBook/:id',
    component:EditbookComponent
  },


  {
    path:'category',
    component:CatgoryComponent
  },
  {
    path:'addcategory',
    component:AddCatgoryComponent
  },


  {
    path:'author',
    component:AuthorComponent,
  },
  {
    path:'addauthor',
    component:AddauthorComponent
  },
  {
    path:'editauthor/:id',
    component:EditauthorComponent
  },
  {
    path:'*',
    component:BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
