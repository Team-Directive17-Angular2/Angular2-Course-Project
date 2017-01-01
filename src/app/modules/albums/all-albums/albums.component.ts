import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { AlbumService } from '../../../services/album.service';

import { routerTransition } from '../../../animations/router.animations';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  encapsulation: ViewEncapsulation.None
})
export class AlbumsComponent implements OnInit, OnDestroy {
    albums: any[];
    genres: string[];
    genre: string;
    searchPattern: string;
    parameters: string[];
    sortTypes: string[];
    sortOrders: string[];
    sortType: string;
    sortOrder: string;

    private subscription: any;

    constructor(private albumService:AlbumService)
    {

        this.parameters = ['name'];
        this.searchPattern = '';

        this.genres = ["All", "Pop", "Jazz", "Metal", "Rock", "Hip-Hop", "Rap", "Electronic", "Country", "Blues"]
        this.sortTypes = ['Name'];
        this.sortOrders = ['Ascending', 'Descending'];

        this.genre = this.genres[0];
        this.sortType = this.sortTypes[0];
        this.sortOrder = this.sortOrders[0];
    }

    ngOnInit() {
        this.subscription = this.albumService.getAlbums()
        .subscribe( albums => {
            this.albums = albums;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
