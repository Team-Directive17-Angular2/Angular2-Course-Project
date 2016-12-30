import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArtistsListComponent implements OnInit {

    constructor(private routeParams: ActivatedRoute)
    { }

    @Input() artists: any[];
    @Input() searchPattern: string;
    @Input() parameters: string[];
    @Input() sortType;
    @Input() sortOrder;

    ngOnInit() {
    }

}
