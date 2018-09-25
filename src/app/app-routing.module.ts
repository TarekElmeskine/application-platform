import {NgModule} from '@angular/core';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';
import {HomeComponent} from './core/home/home.component';

const appRoutes: Route [] = [
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
