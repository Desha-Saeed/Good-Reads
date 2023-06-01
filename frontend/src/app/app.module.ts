import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PartsModule } from './parts/parts.module';
import { CategoryModule } from './category/category.module';
import { AuthorModule } from './author/author.module';
import { MainModule } from './main/main.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BooksModule,
    PartsModule,
    CategoryModule,
    AuthorModule,
    UserModule,
    FormsModule,
    FontAwesomeModule,
    MainModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
