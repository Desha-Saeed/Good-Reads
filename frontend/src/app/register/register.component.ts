import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../services/auth.service'

FormControl

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _AuthService: AuthService) {}

  registerForm!: FormGroup;

  getRegisterInfo(registerForm: FormGroup) {
    //check if form is valid
    if(registerForm.valid == true) {
     
      this._AuthService.register(registerForm.value).subscribe((data)=> {
        console.log(data);
        
      });
    } 
    
  }
 


  ngOnInit() {
    this.registerForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'lastName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'password': new FormControl(null,[Validators.required]),
      'confirmPassword': new FormControl(null, [Validators.required]),
     });
  }
}
