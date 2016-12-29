import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)':'updateUrl()',
    '[src]':'src'
   }
})
export class DefaultImageDirective {

    constructor(el: ElementRef){

    }
    @Input() src:string;
    @Input() default:string;

    updateUrl() {
        this.src = this.default;
    }
}
