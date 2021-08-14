import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcomponent',
  templateUrl: './listcomponent.component.html',
  styleUrls: ['./listcomponent.component.css']
})
export class ListcomponentComponent implements OnInit {

  products:any;
  showImage:boolean=false;
  search="";
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getProductListById();
  }

  getProductListById(){
    this.http.get('../assets/products.json').subscribe(data=>{
      this.products=data;
      console.log(this.products)
    })
  }

}
