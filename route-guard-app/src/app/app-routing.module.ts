import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  {path:'admin',component:AdminHomeComponent,canActivate:[AdminGuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
