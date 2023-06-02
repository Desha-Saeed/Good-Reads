import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavberComponent } from './navber/navber.component';
import { TopNavbarComponent } from './navber/top-navbar/top-navbar.component';
import { BotNavbarComponent } from './navber/bot-navbar/bot-navbar.component';
import { FirstsctioComponent } from './firstsctio/firstsctio.component';
import { SSectionComponent } from './s-section/s-section.component';

import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { BodyComponent } from './body/body.component';
import { SidnevComponent } from './sidnev/sidnev.component';
import { ReadComponent } from './read/read.component';
import { CurrentlyReadingComponent } from './currently-reading/currently-reading.component';
import { WantToReadComponent } from './want-to-read/want-to-read.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BooksCardComponent } from './books-card/books-card.component';import {HttpClientModule} from '@angular/common/http';
import { UserHomeComponent } from './user-home/user-home.component'

import { BooksModule } from './books/books.module';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { PartsModule } from './parts/parts.module';
import { CategoryModule } from './category/category.module';
import { AuthorModule } from './author/author.module';
import { MainModule } from './main/main.module';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    NavberComponent,
    TopNavbarComponent,
    BotNavbarComponent,
    FirstsctioComponent,
    SSectionComponent,
    LoginComponent,
    RegisterComponent,
    BodyComponent,
    SidnevComponent,
    ReadComponent,
    CurrentlyReadingComponent,
    WantToReadComponent,
    BooksComponent,
    BooksCardComponent,
    UserHomeComponent,
    CategoriesComponent,
    FooterComponent,
  ],
  
  imports: [
    BrowserModule,
    BooksModule,
    PartsModule,
    CategoryModule,
    AuthorModule,
    NgxPaginationModule,
  

   
    FormsModule,
    FontAwesomeModule,
    MainModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
   
    NgOptimizedImage,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
    ,
    BrowserAnimationsModule,
    RouterModule
    
    

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(library: FaIconLibrary) {
     
    }
  
}
