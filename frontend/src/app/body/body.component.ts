import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
 @Input() collapsed= false;
 @Input() screenwidth =0;
}
// getBodyClass(): string{
//   let styleclass='';
//   if(this.collapsed && this.screenwidth>780){
//     styleclass='body-trimmed '
//   }
//   return
// }