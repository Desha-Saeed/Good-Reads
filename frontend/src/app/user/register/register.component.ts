import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserservService } from 'src/app/services/userserv.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerform!:FormGroup;
  constructor(private fbulider:FormBuilder , private userserv:UserservService){
    this.registerform=this.fbulider.group({
      'firstName':['',[Validators.required,Validators.minLength(6)]],
      'lastName':['',[Validators.required,Validators.minLength(6)]],
      'password':['',[Validators.required,Validators.minLength(8)]],
      'email':['',[Validators.required,Validators.minLength(6)]]
    })

  }

  register(){
  
    let data=new FormData();
    data.append('firstName',this.registerform.get('firstName')?.value);
    data.append('lastName',this.registerform.get('lastName')?.value);
    data.append('email',this.registerform.get('email')?.value);
    data.append('password',this.registerform.get('password')?.value);
    data.append('confirmPassword',this.registerform.get('password')?.value);
    data.append('role','admin');

    console.log(data.get('firstName'));
    console.log(data.get('lastName'));
    console.log(data.get('email'));
    console.log(data.get('password'));
    console.log(data.get('role'));
    
    
    this.userserv.register(data).subscribe(res=>{
      console.log('success');
      
    })
    
  }

}
