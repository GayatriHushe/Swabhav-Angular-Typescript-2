import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-update-student-component',
  templateUrl: './update-student-component.component.html',
  styleUrls: ['./update-student-component.component.css']
})
export class UpdateStudentComponentComponent implements OnInit {
  student:any;

  studentForm = new FormGroup({
    id: new FormControl(),
    rollNo: new FormControl("",[Validators.required]),
    name: new FormControl("",[Validators.required]),
    date: new FormControl("",[Validators.required]),
    age: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    isMale: new FormControl("",[Validators.required])
  })

  constructor(private service:StudentserviceService, private route:ActivatedRoute, private router:Router) { }

  onSubmit()
  {
    console.log("Student form values : "+this.studentForm.value);
    if(this.studentForm.valid)
    {
      this.service.updateStudent(this.student.id,this.studentForm.value).subscribe(data=>{
        if(data.status==200)
        {
          console.log("Updated student successfully");
          this.router.navigate(['/display']);
        }
        else
        {
          console.log("Updation failed");
        }
      })
    }
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params=>{
      this.service.getStudentById(params.get("id")).subscribe(data=>{
        this.student=data;
        this.student=this.student[0];
        this.student.date=new Date(this.student.date);
      })
    })
  }

}
