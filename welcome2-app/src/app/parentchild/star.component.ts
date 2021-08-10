import { Component, Input, OnInit, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector:'sw-star',
    templateUrl:'./star.component.html'
})
export class StarComponent 
{
    @Input()
    rating:number=4;

    @Output()
    onHoverEmitter:EventEmitter<any>=new EventEmitter();

    onHover()
    {
        if(this.rating>=4)
        {
            this.onHoverEmitter.emit("Excellent "+this.rating)
            return;
        }
            
        else if(this.rating>=2)
        {
            this.onHoverEmitter.emit("Average "+this.rating)
            return;
        }
        this.onHoverEmitter.emit("Poor "+this.rating)
    }


}