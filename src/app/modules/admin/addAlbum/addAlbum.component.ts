import {Component, OnInit,  ElementRef, ComponentRef, ContentChildren, QueryList,Input} from '@angular/core';
import {Router} from '@angular/router';

import { AlbumService } from '../../../services/album.service';
import { ArtistService } from '../../../services/artist.service';
import { Artist } from '../../../models/artist.model'
import { routerTransition } from '../../../animations/router.animations';

import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'app-addAlbum',
    templateUrl: './addAlbum.component.html',
    styleUrls: ['./addAlbum.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})

export class AddAlbumComponent implements OnInit {
    model:any = {};
    songs: any[];
    genr: any;
    genresCollection:string[];
    file: any;
    fileName: string;
    suggestedArtists: string[];
    options: Object;

    private subscription: any;

    constructor(private router: Router,
          private albumService: AlbumService,
          private artistService: ArtistService,
          private notificationsService: NotificationsService) {
    }

    ngOnInit() {
        this.songs = [{value: ""}];
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        this.genresCollection = ["Pop", "Jazz", "Metal", "Rock", "Hip-Hop", "Rap", "Electronic", "Country", "Blues"];
        this.fileName = 'No file chosen';

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

    addAlbum(){
        let album : Object = {};

        album["songs"] = [];
        this.songs.forEach((x => album["songs"].push(x.value)));
        album["genres"] = this.genr;

        album["artist"] = this.model.artist;
        album["year"] = this.model.year;
        album["name"] = this.model.name;

        if(this.file.type === 'image/jpeg' || this.file.type === 'image/png') {

            let reader: FileReader = new FileReader();
            reader.readAsDataURL(this.file);

            reader.onload = () => {
                let dataUrl = reader.result;

                this.albumService.addAlbum(album, dataUrl)
                    .subscribe(res => {
                        if (res) {
                            this.notificationsService.success('', 'Successfully added new album');
                            this.fileName = 'No file chosen';
                            this.songs = [{value: ""}];
                        } else {
                            this.notificationsService.error('', 'Problem occured while adding a new album. Please try again later.');
                            this.songs = [{value: ""}];
                        }
                    },
                    error => {
                        let message = JSON.parse(error._body);

                        this.notificationsService.error('', message);
                        this.songs = [{value: ""}];
                    });
            };
        } else {
            this.notificationsService.alert('', 'Please upload .jped or .png file.');
        }

    }

    addSongInput(){
        event.preventDefault();
        this.songs.push({value:''});
    }

    public onProfilePictureUpload(event: any): void {
        event.preventDefault();
        this.file = event.target.files[0];
        this.fileName = this.file.name;
    }

   change(options) {
    this.genr = Array.apply(null,options)  // convert to real array
      .filter(option => option.selected)
      .map(option => option.value)
  }
}