import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { AppRoutingModule } from '../app-routing.module';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AuthorComponent } from './author/author.component';



@NgModule({
  declarations: [
    AuthorComponent,
    AddauthorComponent,
    EditauthorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  exports:[
    AuthorComponent,
    AddauthorComponent,
    EditauthorComponent
    
  ]
})
export class AuthorModule { }
export { AuthorComponent };

