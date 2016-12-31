import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-favorite-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArtistsListComponent implements OnInit {

    constructor(private routeParams: ActivatedRoute)
    { }

    @Input() artistsList: any[];

    ngOnInit() {
    }

}
