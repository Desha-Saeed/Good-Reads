import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent {
  
  isLogin: boolean = false;
  
  constructor(private _AuthService: AuthService) {
      if(this._AuthService.currentUser !==null) {

        console.log(this._AuthService.currentUser);
        
        this.isLogin = true
      } else {
        this.isLogin = false
      }
  }

  ngOnInit() {}
}
