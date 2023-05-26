import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './books/book/book.component';
import { CatgoryComponent } from './category/catgory/catgory.component';
import { AddCatgoryComponent } from './category/add-catgory/add-catgory.component';
import { AuthorComponent } from './author/author/author.component';
import { AddauthorComponent } from './author/addauthor/addauthor.component';
import { EditauthorComponent } from './author/editauthor/editauthor.component';
import { AddbookComponent } from './books/addbook/addbook.component';

const routes: Routes = [
  {
    path:'',
    component:BookComponent
  },
  {
    path:'addbook',
    component:AddbookComponent
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
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
