import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { ArtistService } from '../../../services/artist.service';
import { Artist } from '../../../models/artist.model'
import { routerTransition } from '../../../animations/router.animations';

import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'app-addArtist',
    templateUrl: './addArtist.component.html',
    styleUrls: ['./addArtist.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})

export class AddArtistComponent implements OnInit {
    model:any = {};
    genr:any;
    genresCollection:string[];
    file: any;
    fileName: string;
    options: Object;

    constructor(private router: Router,
          private artistService: ArtistService,
          private notificationsService: NotificationsService) {
    }

    ngOnInit() {
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        this.genresCollection = ["Pop", "Jazz", "Metal", "Rock", "Hip-Hop", "Rap", "Electronic", "Country", "Blues"];
       this.fileName = 'No file chosen';
    }

    change(options) {
    this.genr = Array.apply(null,options)  // convert to real array
      .filter(option => option.selected)
      .map(option => option.value)
    }

    addArtist(){
        let artist : Object = {};

        artist["yearsActive"] = this.model.from +' - ' + this.model.to;
        artist["genres"] = this.genr;
        artist["artist"] = this.model.artist;
        artist["bio"] = this.model.bio;
        artist["nationality"] = this.model.nationality;

        if(this.file.type === 'image/jpeg' || this.file.type === 'image/png') {

            let reader: FileReader = new FileReader();
            reader.readAsDataURL(this.file);

            reader.onload = () => {
                let dataUrl = reader.result;

                this.artistService.addArtist(artist, dataUrl)
                    .subscribe(res => {
                        if (res) {
                            this.notificationsService.success('', 'Successfully added new artist');
                            this.fileName = 'No file chosen';
                        } else {
                            this.notificationsService.error('', 'Problem occured while adding a new artist. Please try again later.');
                        }
                    },
                    error => {
                        let message = JSON.parse(error._body);

                        this.notificationsService.error('', message);
                    });
            };
        } else {
            this.notificationsService.alert('', 'Please upload .jped or .png file.');
        }
    }

    public onProfilePictureUpload(event: any): void {
        event.preventDefault();
        this.file = event.target.files[0];
        this.fileName = this.file.name;
    }
}