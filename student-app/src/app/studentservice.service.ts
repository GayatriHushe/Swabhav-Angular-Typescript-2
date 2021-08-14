import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  myUrl:string="http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students";

  constructor(private httpClient:HttpClient) { }

  getStudents()
  {
    return this.httpClient.get(this.myUrl);
  }

  getStudentById(id:any)
  {
    return this.httpClient.get(this.myUrl+"/"+id);
  }

  addStudent(data:JSON)
  {
    return this.httpClient.post(this.myUrl,data);
  }

  updateStudent(id:string,data:JSON)
  {
    return this.httpClient.put(this.myUrl+"/"+id,data,{observe:'response'})
  }

  deleteStudent(id:string)
  {
    return this.httpClient.delete(this.myUrl+"/"+id,{observe:'response'})
  }
}
