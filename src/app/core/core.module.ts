import {NgModule} from '@angular/core';
import {AppRoutingModule} from '../app-routing.module';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ]
})
export class CoreModule {

}
