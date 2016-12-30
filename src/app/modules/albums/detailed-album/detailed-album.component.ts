import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { NotificationsService } from 'angular2-notifications';
import { routerTransition } from '../../../animations/router.animations';

@Component({
  selector: 'app-detailed-album',
  templateUrl: './detailed-album.component.html',
  styleUrls: ['./detailed-album.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  encapsulation: ViewEncapsulation.None
})
export class DetailedAlbumComponent implements OnInit, OnDestroy {

    constructor(private routeParams: ActivatedRoute,
        private notificationsService: NotificationsService)
    { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
