import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appForward]'
})
export class ForwardDirective {

  constructor(el: ElementRef,element1:ElementRef,element2:ElementRef) {
    el.nativeElement.style.color="red"
    el.nativeElement.style.backgroundcolor="white"
    

    }
    
    
   }


