import { Component, OnInit, OnDestroy } from '@angular/core';
import { routerTransition } from '../../../animations/router.animations';
import { SongService }  from '../../../services/song.service';

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

    private subscription: any;

  constructor(private songService:SongService) {

        this.parameters = ['name', 'artist', 'album'];
        this.searchPattern = '';

        this.sortTypes = ['Name', 'Artist', 'Album'];
        this.sortOrders = ['Ascending', 'Descending'];

        this.sortType = this.sortTypes[0];
        this.sortOrder = this.sortOrders[0];
   }

  ngOnInit() {
    this.subscription = this.songService.getSongs()
     .subscribe((result) => {
       console.log(result)
       this.songs = result;
     })
     
  }
 
 ngOnDestroy() {
   this.subscription.unsubscribe();
 }


}
