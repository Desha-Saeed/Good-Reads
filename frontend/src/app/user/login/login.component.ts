import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserservService } from 'src/app/services/userserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!:FormGroup;

  constructor(private fbuilder:FormBuilder , private userserv:UserservService){

    this.loginForm=this.fbuilder.group({
      'email':['',[Validators.required ,Validators.email]],
      'password':['',[Validators.required]]
    })

  }

  onSubmit(){

    const data={
      email:this.loginForm.get('email')?.value,
      password:this.loginForm.get('password')?.value
    }

    this.userserv.login(data).subscribe(res=>{
      console.log(res);
      
    })
    
    console.log(this.loginForm.value);
    

  }

}
