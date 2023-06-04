import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bot-navbar',
  templateUrl: './bot-navbar.component.html',
  styleUrls: ['./bot-navbar.component.css']
})
export class BotNavbarComponent {

  isLoggedin: boolean = false;

  constructor(private _AuthService: AuthService) {

  
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

}
