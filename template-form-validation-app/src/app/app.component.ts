import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['input.ng-invalid{border-left:5px solid red;} input.ng-valid{border-left:5px solid green;}']
})
export class AppComponent {
  title = 'template-form-validation-app';

  myEmail="gayatri@gmail.com";

  onSubmit(value:any)
  {
    console.log(value)
  }
  
}
