import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { NotificationsService } from 'angular2-notifications';
import { routerTransition } from '../../../animations/router.animations';

@Component({
  selector: 'app-detailed-artist',
  templateUrl: './detailed-artist.component.html',
  styleUrls: ['./detailed-artist.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  encapsulation: ViewEncapsulation.None
})
export class DetailedArtistComponent implements OnInit, OnDestroy {

    constructor(private routeParams: ActivatedRoute,
        private notificationsService: NotificationsService)
    { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
