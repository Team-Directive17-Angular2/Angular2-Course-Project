import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalEventsManager} from '../../../services/globalEventsManager';
import { SongService } from '../../../services/song.service';
import { Song } from '../../../models/song.model'
import { routerTransition } from '../../../animations/router.animations';

@Component({
    selector: 'app-addArtist',
    templateUrl: './addSong.component.html',
    styleUrls: ['./addSong.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})

export class AddSongComponent implements OnInit {
    model:any = {};
    loading = false;
    error = '';
    successMsg = '';
    
    constructor(private router: Router,
          private songService: SongService) {
    }
    
    ngOnInit() {
       
    }
    
    AddSong(){
        this.loading = true;
        console.log(this.model);
       
        this.songService.AddSong(this.model)
        .subscribe(result => {
            this.successMsg = result;
        });

        setTimeout(()=>{
            this.successMsg = '';
        },2000);
        
    }
}