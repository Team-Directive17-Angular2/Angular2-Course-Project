import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-favorite-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SongsListComponent implements OnInit {

    constructor(private routeParams: ActivatedRoute)
    { }

    @Input() songsList: any[];

    ngOnInit() {
    }

}
