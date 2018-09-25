import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
