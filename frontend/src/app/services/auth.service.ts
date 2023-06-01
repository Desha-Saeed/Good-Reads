import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userData } from './userData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any = null;
  constructor(private _HttpClient: HttpClient) { }

  register(registerFormValue: any):Observable <any> {
    return this. _HttpClient.post('http://localhost:4000/register',  registerFormValue)
  }


  login(loginFormValue: any):Observable <any> {
    return this. _HttpClient.post('http://localhost:4000/login',  loginFormValue)
  }

  saveUserData (firstName: string,  lastName: string, email :string, token: string) {
    let user = new userData(firstName,lastName,email,token);

    this.currentUser = user;  

    
  }
}
