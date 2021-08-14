import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponentComponent } from './add-student-component/add-student-component.component';
import { UpdateStudentComponentComponent } from './update-student-component/update-student-component.component';
import { DisplayStudentComponentComponent } from './display-student-component/display-student-component.component';
import { DeleteStudentComponentComponent } from './delete-student-component/delete-student-component.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponentComponent,
    UpdateStudentComponentComponent,
    DisplayStudentComponentComponent,
    DeleteStudentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
