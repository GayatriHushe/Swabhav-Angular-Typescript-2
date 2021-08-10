
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route,RouterModule } from '@angular/router';
import { HomeComponent } from './HomeComponent';

import { AppComponent } from './app.component';
import { CareerComponent } from './CareerComponent';
import { AboutComponent } from './AboutComponent';
import { DefaultComponent} from './DefaultComponent';
import { RouteConfigModule } from './routeConfigModule';
import { HighlightDirective } from './highlight.directive';

// const routeConfig:Route[]=[
//   {
//     component:HomeComponent, path:'home'
//   },
//   {
//     component:CareerComponent, path:'career'
//   },
//   {
//     component:AboutComponent, path:'about'
//   },
//   {
//     component:HomeComponent, path:''
//   },
//   {
//     component:HomeComponent, path:'**'
//   }
// ];


@NgModule({
  declarations: [
    AppComponent,HomeComponent,CareerComponent,AboutComponent, HighlightDirective, DefaultComponent
  ],
  imports: [
    BrowserModule,RouterModule,
    RouteConfigModule
    //RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
