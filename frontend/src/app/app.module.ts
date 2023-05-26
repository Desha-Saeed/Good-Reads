import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavberComponent } from './navber/navber.component';
import { TopNavbarComponent } from './navber/top-navbar/top-navbar.component';
import { BotNavbarComponent } from './navber/bot-navbar/bot-navbar.component';
import { FirstsctioComponent } from './firstsctio/firstsctio.component';
import { SSectionComponent } from './s-section/s-section.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgOptimizedImage } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavberComponent,
    TopNavbarComponent,
    BotNavbarComponent,
    FirstsctioComponent,
    SSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EditorModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
