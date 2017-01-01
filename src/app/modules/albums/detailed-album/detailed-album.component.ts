import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

import { Album } from '../../../models/album.model';
import { AlbumService } from '../../../services/album.service';
import { UserService } from '../../../services/user.service';
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
    album:Album;
    name:string;
    artist:string;
    year:string;
    imgUrl:string;
    songs: any[];
    genres: any[];
    id: string;
    options: Object;

    private currentUsername: string;
    private favorited: boolean;
    private subscription: any;

    constructor(private router: Router,
        private routeParams: ActivatedRoute,
        private notificationsService: NotificationsService,
        private albumService:AlbumService,
        private userService:UserService)
    { }

    ngOnInit() {
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUsername = currentUser.username;

        this.subscription = this.routeParams.params.subscribe(params => {
            this.id = params['id'];

            this.updateAlbumInformation(this.id);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    updateAlbumInformation(id: string) {
        this.userService.getUser(this.currentUsername)
            .subscribe(user => {

                this.albumService.getAlbum(id)
                .subscribe( album => {
                    this.album = album;
                    this.name = album.name;
                    this.artist = album.artist;
                    this.year = album.year;
                    this.imgUrl = album.imgUrl;
                    this.songs = album.songs;
                    this.genres = album.genres;

                    this.favorited = false;

                    if(user.favoriteAlbums.find(al => al._id == this.id)) {
                        this.favorited = true;
                    }
                },
                error => {
                    this.router.navigate(['error']);
                });
            },
            error => {
                this.router.navigate(['error']);
            })
    };

    addFavoriteAlbum() {
        this.userService.favoriteAlbum(this.currentUsername, this.album, true)
        .subscribe( result => {
            if(result) {
                this.notificationsService.success('', 'Successfully added album to favorites');
            } else{
                this.notificationsService.error('', `Unsuccessfully added album to favorites. Please try again later.`);
            }
        })
    }

    removeFavoriteAlbum() {
        this.userService.favoriteAlbum(this.currentUsername, this.album, false)
        .subscribe( result => {
            if(result) {
                this.notificationsService.success('', 'Successfully removed album from favorites');
            } else{
                this.notificationsService.error('', `Unsuccessfully removed album from favorites. Please try again later.`);
            }
        })
    }
}
