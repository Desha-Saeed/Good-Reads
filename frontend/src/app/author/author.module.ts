import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author/author.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';



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
