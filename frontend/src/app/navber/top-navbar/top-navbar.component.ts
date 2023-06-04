import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent {
  
  isLoggedin: boolean = false;

  constructor(private _AuthService: AuthService , private _Router : Router) {

  
  }

  ngOnInit () {
    this._AuthService.currentUser._value
    if( this._AuthService.currentUser._value != null || this._AuthService.currentUser.role == 'user' ) {

      console.log('heeeeeeeelooooooo');
      
     this.isLoggedin = false
    }else if(this._AuthService.currentUser.role == 'admin') {

      console.log("Hello admin");
      
      this.isLoggedin = true;
      
    }
  }


  logout() {
    this._AuthService.logout();
    this._Router.navigate([''])
    this.isLoggedin = false
  }
}
