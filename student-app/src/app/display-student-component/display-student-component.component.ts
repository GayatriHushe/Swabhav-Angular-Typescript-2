import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-display-student-component',
  templateUrl: './display-student-component.component.html',
  styleUrls: ['./display-student-component.component.css']
})
export class DisplayStudentComponentComponent implements OnInit {
  students:any;
  constructor(private service:StudentserviceService, private router:Router) { }

  getStudents()
  {
    this.service.getStudents().subscribe(data=>{
      this.students=data;
      console.log("Students : "+this.students);
    })
  }

  delete(id:string)
  {
    if(confirm("Do u want to delete ?"))
    {
      this.service.deleteStudent(id).subscribe(data=>{
        if(data.status==200)
        {
          console.log("Student with id "+id+" deleted successfully");
          this.getStudents();
        }
        else
          console.log("Student with id "+id+" not deleted");
      })
    }
  }

  ngOnInit(): void {
    this.getStudents();
  }

}
