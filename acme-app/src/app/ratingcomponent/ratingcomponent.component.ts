import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ratingcomponent',
  templateUrl: './ratingcomponent.component.html',
  styleUrls: ['./ratingcomponent.component.css']
})
export class RatingcomponentComponent implements OnInit {

  @Input()
  rating:number=3;

  @Output()
  onHoverEmitter:EventEmitter<any>=new EventEmitter();

  title=""

  constructor() { }

  onHover()
  {
    if(this.rating<2){
      this.title="Bad Product : "+ this.rating
	  console.log(this.rating)
      return;
    }
    if(this.rating<4){
      this.title="Average Product : "+ this.rating
	  console.log(this.rating)
      return;
    }
    this.title="Good Product : "+ this.rating
	console.log(this.rating)
  }

  ngOnInit(): void {
  }

}
