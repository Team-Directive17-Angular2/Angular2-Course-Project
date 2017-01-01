import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';

import { SongService } from '../../../services/song.service';
import { ArtistService } from '../../../services/artist.service';
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

export class AddSongComponent implements OnInit, OnDestroy {
    model:any = {};
    suggestedArtists: string[];
    options: Object;

    private subscription: any;

    constructor(private router: Router,
          private songService: SongService,
          private artistService: ArtistService,
          private notificationsService: NotificationsService) {
    }

    ngOnInit() {
       this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };

       this.suggestedArtists = [];

       this.subscription = this.artistService.getArtistsNames()
       .subscribe( artists => {
           artists.forEach(a => {
               this.suggestedArtists.push(a.name);
           });
           console.log(this.suggestedArtists);
       });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    addSong(){

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