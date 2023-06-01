import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';

import { SingelBookComponent } from './singel-book/singel-book.component';



@NgModule({
  declarations: [
    HomeComponent,
    BooksComponent,
    SingelBookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
