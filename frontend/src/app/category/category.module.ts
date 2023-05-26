import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatgoryComponent } from './catgory/catgory.component';
import { AddCatgoryComponent } from './add-catgory/add-catgory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CatgoryComponent,
    AddCatgoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports:[
    CatgoryComponent,AddCatgoryComponent
  ]
})
export class CategoryModule { }
