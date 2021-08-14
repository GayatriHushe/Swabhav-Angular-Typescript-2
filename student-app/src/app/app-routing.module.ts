import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponentComponent } from './add-student-component/add-student-component.component';
import { DeleteStudentComponentComponent } from './delete-student-component/delete-student-component.component';
import { DisplayStudentComponentComponent } from './display-student-component/display-student-component.component';
import { UpdateStudentComponentComponent } from './update-student-component/update-student-component.component';

const routes: Routes = [

{
  component:DisplayStudentComponentComponent,path:'display'
},
{
  component:AddStudentComponentComponent,path:'add'
},
{
  component:UpdateStudentComponentComponent,path:'update/:id'
},
{
  component:DeleteStudentComponentComponent,path:'delete/:id'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
