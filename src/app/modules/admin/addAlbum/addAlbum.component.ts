import {Component, OnInit,  ElementRef, ComponentRef, ContentChildren, QueryList,Input} from '@angular/core';
import {Router} from '@angular/router';

import { AlbumService } from '../../../services/album.service';
import { Artist } from '../../../models/artist.model'
import { routerTransition } from '../../../animations/router.animations';

@Component({
    selector: 'app-addAlbum',
    templateUrl: './addAlbum.component.html',
    styleUrls: ['./addAlbum.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})

export class AddAlbumComponent implements OnInit {
    model:any = {};
    loading = false;
    error = '';
    successMsg = '';
    songs = [{value: ""}];
    genr:any;
    genresCollection:string[];
    
    constructor(private router: Router,
          private albumService: AlbumService) {
    }
    
    ngOnInit() {
       this.genresCollection = ["Pop", "Jazz", "Metal", "Rock", "Hip-Hop", "Rap", "Electronic", "Country", "Blues"];
    }

    AddAlbum(){
        this.loading = true;
        this.model.songs = [];
        this.songs.forEach((x=> this.model.songs.push(x.value)));
        this.model.genres = this.genr;
        console.log(this.model);
        this.albumService.addAlbum(this.model)
        .subscribe( result => {
            this.successMsg =result;
        });

        setTimeout(()=>{
            this.successMsg = '';
        },2000);
        
    }

    addSongInput(){
        event.preventDefault();
        this.songs.push({value:''});
        console.log(this.songs);
    }

   change(options) {
    this.genr = Array.apply(null,options)  // convert to real array
      .filter(option => option.selected)
      .map(option => option.value)
  }
}