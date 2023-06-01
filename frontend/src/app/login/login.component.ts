import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginForm!: FormGroup;
  errorMessage:string = '';
  flag: boolean = false

  constructor(private _AuthService: AuthService, private _Router:Router) {}

 getLoginInfo(loginForm: FormGroup) {


  this._AuthService.login(loginForm.value).subscribe((data) => {
    console.log(data);
       
    if(data.status == 'success') {

      this._AuthService.saveUserData(data.user.firstName, data.user.lastName, data.user.email, data.token)
      this._Router.navigate([''])
    }else {
     
      
      this.flag = true;
      this.errorMessage = data.error.errors[0]

    }
    
  })
 }


  ngOnInit() {
    this.loginForm = new FormGroup({
      
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'password': new FormControl(null,[Validators.required]),
      
     });
  };
  

}
