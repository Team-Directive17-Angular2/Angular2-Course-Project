import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

    constructor(private routeParams: ActivatedRoute)
    { }

    @Input() bio: string;
    @Input() yearsActive: string;
    @Input() genres: any[];

    ngOnInit() {
    }

}
