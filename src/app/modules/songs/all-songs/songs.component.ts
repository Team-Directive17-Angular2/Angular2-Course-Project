import { Component, OnInit, OnDestroy } from '@angular/core';
import { routerTransition } from '../../../animations/router.animations';
import { SongService }  from '../../../services/song.service';
import { UserService }  from '../../../services/user.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class SongsComponent implements OnInit, OnDestroy {

    songs: any[];
    searchPattern: string;
    parameters: string[];
    sortTypes: string[];
    sortOrders: string[];
    sortType: string;
    sortOrder: string;
    showIcons: boolean;
    currentUsername: string;
    favoriteSongs: any[];

    options: Object;
    private subscription: any;

  constructor(private songService: SongService,
      private userService: UserService,
      private notificationsService: NotificationsService,) {

        this.parameters = ['name', 'artist', 'album'];
        this.searchPattern = '';

        this.sortTypes = ['Name', 'Artist', 'Album'];
        this.sortOrders = ['Ascending', 'Descending'];

        this.sortType = this.sortTypes[0];
        this.sortOrder = this.sortOrders[0];
   }

  ngOnInit() {
    this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.showIcons = true;

    if(currentUser) {
        this.currentUsername = currentUser.username;

        this.userService.getUser(this.currentUsername)
            .subscribe((result) => {
                this.favoriteSongs = result.favoriteSongs;
                this.updateSongsList();
            },
            (err) => {
                console.log('problem');
            })
    } else {
        this.showIcons = false;
        this.updateSongsList();
    }
  }

  updateSongsList() {
      this.subscription = this.songService.getSongs()
       .subscribe((result) => {
         this.songs = result;
         this.songs.forEach((s) => {
             if (this.favoriteSongs.filter((fs) => fs._id == s._id).length > 0) {
                s.contains = true;
            } else {
                s.contains = false;
            }
         })
       })
  }

 ngOnDestroy() {
   this.subscription.unsubscribe();
 }

 addFavoriteSong(song) {
     this.userService.favoriteSong(this.currentUsername, song, true)
     .subscribe( result => {
         if(result) {
             this.notificationsService.success('', 'Successfully added song to favorites');
         } else{
             this.notificationsService.error('', `Unsuccessfully added song to favorites. Please try again later.`);
         }
     })
 }

 removeFavoriteSong(song) {
     this.userService.favoriteSong(this.currentUsername, song, false)
     .subscribe( result => {
         if(result) {
             this.notificationsService.success('', 'Successfully removed song from favorites');
         } else{
             this.notificationsService.error('', `Unsuccessfully removed song from favorites. Please try again later.`);
         }
     })
 }
}
