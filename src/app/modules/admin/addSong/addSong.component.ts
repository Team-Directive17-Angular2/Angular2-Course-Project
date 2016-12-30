import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { SongService } from '../../../services/song.service';
import { Song } from '../../../models/song.model'
import { routerTransition } from '../../../animations/router.animations';

import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'app-addArtist',
    templateUrl: './addSong.component.html',
    styleUrls: ['./addSong.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})

export class AddSongComponent implements OnInit {
    model:any = {};
    options: Object;

    constructor(private router: Router,
          private songService: SongService,
          private notificationsService: NotificationsService) {
    }

    ngOnInit() {
       this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
    }

    AddSong(){

        this.songService.addSong(this.model)
        .subscribe(result => {
                if (result) {
                    this.notificationsService.success('', 'Successfully added new song');
                } else {
                    this.notificationsService.error('', 'Problem occured while adding a new song. Please try again later.');
                }
            },
            error => {
                let message = JSON.parse(error._body);

                this.notificationsService.error('', message);
            }
        );
    }
}