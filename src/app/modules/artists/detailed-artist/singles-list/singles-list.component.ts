import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-singles-list',
  templateUrl: './singles-list.component.html',
  styleUrls: ['./singles-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SinglesListComponent implements OnInit {

    constructor(private routeParams: ActivatedRoute)
    { }

    @Input() singlesList: any[];
    @Input() artist: string;
    
    ngOnInit() {
    }

}
