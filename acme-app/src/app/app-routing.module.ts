import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';
import { ProductcomponentComponent } from './productcomponent/productcomponent.component';

const routes: Routes = [

  {
    component:HomecomponentComponent,path:'home'
  },
  {
    component:ProductcomponentComponent,path:'product/:id'
  },
  {
    component:ListcomponentComponent, path:'list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
