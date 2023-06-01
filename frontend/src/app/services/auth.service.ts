import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }

  register(registerFormValue: any):Observable <any> {
    return this. _HttpClient.post('http://localhost:4000/register',  registerFormValue)
  }


  login(loginFormValue: any):Observable <any> {
    return this. _HttpClient.post('http://localhost:4000/login',  loginFormValue)
  }
}
