import { Component } from '@angular/core';
import { faCircleUser} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent {
  faCoffee =faCircleUser;
}
