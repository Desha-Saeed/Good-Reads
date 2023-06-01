import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }from'./login/login.component';
import { FirstsctioComponent } from './firstsctio/firstsctio.component';
import{RegisterComponent}from'./register/register.component';
import{ BodyComponent}from'./body/body.component';
import { ReadComponent } from './read/read.component';
import { CurrentlyReadingComponent } from './currently-reading/currently-reading.component';
import { WantToReadComponent } from './want-to-read/want-to-read.component';
import { SidnevComponent } from './sidnev/sidnev.component';
import { BooksComponent } from './books/books.component';
const routes: Routes = [
  {
    path:'books',
    component:BooksComponent   
  },
  {
    path:'read',
    component:ReadComponent 
  },
  {
    path:'currently reading',
    component:CurrentlyReadingComponent 
  },
  {
    path:'want to read',
    component:WantToReadComponent  
  },
  
  {path:"",
component:FirstsctioComponent },
  {
   path:"login",
   component: LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"sidnev",
    component:SidnevComponent 
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }