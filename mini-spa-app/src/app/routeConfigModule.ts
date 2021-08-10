import {Route,RouterModule } from '@angular/router';
import { HomeComponent } from './HomeComponent';
import { CareerComponent } from './CareerComponent';
import { AboutComponent } from './AboutComponent';

import { NgModule } from '@angular/core';
import { DefaultComponent } from './DefaultComponent';

const routeConfig:Route[]=[
  {
    component:HomeComponent, path:'home'
  },
  {
    component:CareerComponent, path:'career'
  },
  {
    component:AboutComponent, path:'about'
  },
  {
    component:DefaultComponent, path:'default/:id'
  },
  {
    component:HomeComponent, path:''
  },
  {
    component:HomeComponent, path:'**'
  }
];

@NgModule({
    imports:[RouterModule.forRoot(routeConfig)],
    exports:[RouterModule]
})
export class RouteConfigModule
{

}