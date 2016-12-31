import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { Artist } from '../../../models/artist.model';
import { ArtistService } from '../../../services/artist.service';
import { UserService } from '../../../services/user.service';
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
    artist:Artist;
    name:string;
    nationality:string;
    yearsActive:string;
    bio:string;
    imgUrl:string;
    singles: any[];
    albums: any[];
    genres: any[];
    options: Object;

    private currentUsername: string;
    private favorited: boolean;
    private subscription: any;

    constructor(private routeParams: ActivatedRoute,
        private notificationsService: NotificationsService,
        private artistService:ArtistService,
        private userService:UserService)
    { }

    ngOnInit() {
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUsername = currentUser.username;

        this.subscription = this.routeParams.params.subscribe(params => {
            let id = params['id'];

            this.updateArtistInformation(id);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    updateArtistInformation(id: string) {
        this.artistService.getArtist(id)
        .subscribe( artist => {
            this.artist = artist;
            this.name = artist.name;
            this.nationality = artist.nationality;
            this.yearsActive = artist.yearsActive;
            this.bio = artist.bio;
            this.imgUrl = artist.imgUrl;
            this.singles = artist.followers;
            this.albums = artist.albums;
            this.genres = artist.genres;

            this.favorited = false;
        },
        error => {
            console.log('REDIRECT TO ERROR PAGE');
        });
    };

    addFavoriteArtist() {
        this.userService.favoriteArtist(this.currentUsername, this.artist, true)
        .subscribe( result => {
            if(result) {
                this.notificationsService.success('', 'Successfully added artist to favorites');
            } else{
                this.notificationsService.error('', `Unsuccessfully added artist to favorites. Please try again later.`);
            }
        })
    }

    removeFavoriteArtist() {
        this.userService.favoriteArtist(this.currentUsername, this.artist, false)
        .subscribe( result => {
            if(result) {
                this.notificationsService.success('', 'Successfully removed artist from favorites');
            } else{
                this.notificationsService.error('', `Unsuccessfully removed artist from favorites. Please try again later.`);
            }
        })
    }
}
