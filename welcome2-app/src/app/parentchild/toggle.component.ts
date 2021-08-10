import { Component, Input, OnInit,Output,EventEmitter } from "@angular/core";

@Component({
    selector:'sw-toggleBtn',
    templateUrl:'./toggle.component.html'
})
export class ToggleComponent implements OnInit
{
    @Input()
    infoText:string="Swabhav";
    btnText:string="0";
    @Input()
    OnColor:string="";

    @Output()
    toggleStateChange:EventEmitter<String>=new EventEmitter<String>()
    
    constructor()
    {
        console.log("inside constructor");
        console.log(this.infoText);
    }

    ngOnInit():void
    {
        console.log("inside on init");
        console.log(this.infoText);
    }

    clickHandler()
    {
        this.infoText="Toggle Me ";
        
        if(this.btnText=="0")
        {
            this.OnColor="red"
            this.btnText="1";
            this.toggleStateChange.emit(this.btnText);
            return;
        }
        this.btnText="0";
        this.OnColor="green"
        this.toggleStateChange.emit(this.btnText);
    }
}