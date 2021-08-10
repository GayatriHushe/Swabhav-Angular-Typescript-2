import { Directive ,ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})



export class HighlightDirective {

  @Input() appHighlight = '';

  constructor(private e1:ElementRef) { 
    e1.nativeElement.style.backgroundColor='pink';
  }


}


