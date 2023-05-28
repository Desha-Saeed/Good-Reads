import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }from'./login/login.component';
import { FirstsctioComponent } from './firstsctio/firstsctio.component';
import{RegisterComponent}from'./register/register.component';
const routes: Routes = [
  {path:"",
component:FirstsctioComponent },
  {
   path:"login",
   component: LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }