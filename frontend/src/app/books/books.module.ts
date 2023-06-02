import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { AddbookComponent } from './addbook/addbook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { EditbookComponent } from './editbook/editbook.component';
import {NgxPaginationModule} from 'ngx-pagination'; 



@NgModule({
  declarations: [
    BookComponent,
    AddbookComponent,
    EditbookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule
  ]
})
export class BooksModule { }
