import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { userData } from './userData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient) {
    if(localStorage.getItem('user') !=null) {
      this.currentUser.next(JSON.parse(localStorage.getItem('user')!))
    }
   }


   logout() {
    this.currentUser.next(null);

    localStorage.clear()
   }

  register(registerFormValue: any):Observable <any> {
    return this. _HttpClient.post('http://localhost:4000/register',  registerFormValue)
  }


  login(loginFormValue: any):Observable <any> {
    return this. _HttpClient.post('http://localhost:4000/login',  loginFormValue)
  }

  saveUserData (firstName: string,  lastName: string, email :string, token: string, role: string) {
    let user = new userData(firstName,lastName,email,token, role);


    localStorage.setItem('user', JSON.stringify(user))

    this.currentUser.next(user)
    console.log(this.currentUser);
    

    
  }
}
