import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavberComponent } from './navber/navber.component';
import { TopNavbarComponent } from './navber/top-navbar/top-navbar.component';
import { BotNavbarComponent } from './navber/bot-navbar/bot-navbar.component';
import { FirstsctioComponent } from './firstsctio/firstsctio.component';
import { SSectionComponent } from './s-section/s-section.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faUser as fatUser } from '@fortawesome/free-regular-svg-icons'; 
import { faUser } from '@fortawesome/free-solid-svg-icons';
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EditorModule,
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
      library.addIcons(faUser,fatUser );
    }
  
}
