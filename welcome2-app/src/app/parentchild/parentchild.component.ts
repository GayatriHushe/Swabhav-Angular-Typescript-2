import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-parentchild',
  templateUrl: './parentchild.component.html',
  styleUrls: ['./parentchild.component.css']
})
export class ParentchildComponent implements OnInit {

   msg:string="";

  constructor() { }

  ngOnInit(): void {
  }

  onHover(e : string)
  {
    this.msg = e;
  }

  showAlert(e:any)
  {
    console.log(e);
    alert(e);
  }

  showRating(e:any)
  {
    this.msg=e;
    console.log(e);
  }

}
