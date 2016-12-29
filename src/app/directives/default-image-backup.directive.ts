import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)':'updateUrl()',
    '[src]':'src'
   }
})
export class DefaultImageDirective implements OnInit {

    constructor(el: ElementRef){ 
    }

    @Input() src:string;
    @Input() default:string;

    ngOnInit() {
    }
    updateUrl() {
        this.src = this.default;
    }
}
