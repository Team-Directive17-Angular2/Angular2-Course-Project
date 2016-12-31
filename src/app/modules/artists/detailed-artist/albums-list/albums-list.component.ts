import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AlbumsListComponent implements OnInit {

    constructor(private routeParams: ActivatedRoute)
    { }

    @Input() albumsList: any[];

    ngOnInit() {
    }

}
