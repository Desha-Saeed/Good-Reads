import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector:'app-navber',
  templateUrl:'./navber.component.html',
  styleUrls:['./navber.component.css']
})
export class NavberComponent {

  isLoggedin: boolean = false;

  constructor(private _AuthService: AuthService) {

  
  }

  ngOnInit () {
    if( this._AuthService.currentUser != null && this._AuthService.currentUser.role == 'user') {
     this.isLoggedin = false
    }else if(this._AuthService.currentUser.role == 'admin') {

      console.log("Hello admin");
      
      this.isLoggedin = true;
      
    }
  }
}
