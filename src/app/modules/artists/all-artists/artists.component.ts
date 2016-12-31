import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { ArtistService } from '../../../services/artist.service';

import { routerTransition } from '../../../animations/router.animations';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  encapsulation: ViewEncapsulation.None
})
export class ArtistsComponent implements OnInit {
    artists: any[];
    genres: string[];
    genre: string;
    searchPattern: string;
    parameters: string[];
    sortTypes: string[];
    sortOrders: string[];
    sortType: string;
    sortOrder: string;

    private subscription: any;

    constructor(private artistService:ArtistService)
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
        this.subscription = this.artistService.getArtists()
        .subscribe( artists => {
            this.artists = artists;
        });
    }

}
