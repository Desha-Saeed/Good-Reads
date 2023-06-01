import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginForm!: FormGroup;

  constructor(private _AuthService: AuthService) {}

 getLoginInfo(loginForm: FormGroup) {
  this._AuthService.login(loginForm.value).subscribe((data) => {
    console.log(data);
    
  })
 }


  ngOnInit() {
    this.loginForm = new FormGroup({
      
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'password': new FormControl(null,[Validators.required]),
      
     });
  };
  

}
