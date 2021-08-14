import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-delete-student-component',
  templateUrl: './delete-student-component.component.html',
  styleUrls: ['./delete-student-component.component.css']
})
export class DeleteStudentComponentComponent implements OnInit {

  constructor(private service:StudentserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log("Delete service called");
    console.log(this.route.params.subscribe(data=>{
      console.log("Student id : "+data.id);
      this.service.deleteStudent(data.id).subscribe(data=>{
        if(data.status==200)
        {
          console.log("Delete done successfully");
          this.router.navigate(['display']);
        } 
        else
          console.log("Delete not done");

      })
    }))

  }

}
