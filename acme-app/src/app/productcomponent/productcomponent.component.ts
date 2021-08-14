import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productcomponent',
  templateUrl: './productcomponent.component.html',
  styleUrls: ['./productcomponent.component.css']
})
export class ProductcomponentComponent implements OnInit {

  products:any;
  product:any;

  constructor(private httpClient:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.getProductById(params.get("id"))
    })
  }

  getProductById(id:any){
    this.httpClient.get('../assets/products.json').subscribe(data=>{
      this.products=data;
      this.product = this.products.find((o:any)=>{
        return o.productId == id;
    })
  })

  
}
}
