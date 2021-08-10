import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sw-default',
  template: `<h1>Default</h1>`,
  styleUrls: ['./app.component.css']
})
export class DefaultComponent implements OnInit {
  id:string | null ='';
  constructor(private route: ActivatedRoute)
  {}

  ngOnInit():void{
    this.id=this.route.snapshot.paramMap.get('id');
    console.log("Id : "+this.id);
  }
}
