import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-add-student-component',
  templateUrl: './add-student-component.component.html',
  styleUrls: ['./add-student-component.component.css']
})

export class AddStudentComponentComponent implements OnInit {

  studentForm = new FormGroup({
    id: new FormControl(),
    rollNo: new FormControl("",[Validators.required]),
    name: new FormControl("",[Validators.required]),
    date: new FormControl("",[Validators.required]),
    age: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    isMale: new FormControl("",[Validators.required])
  })

  constructor(private service:StudentserviceService) { }

  onSubmit()
  {
    console.log("Student form values : "+this.studentForm.value);
    if(this.studentForm.valid)
    {
      this.service.addStudent(this.studentForm.value).subscribe(data=>{
        console.log("Student data : "+data+" added successfully");
      })
    }
  }

  ngOnInit(): void {
  }

}
