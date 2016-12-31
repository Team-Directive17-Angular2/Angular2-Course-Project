import { Component, ViewEncapsulation, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { SongService }  from '../../../../services/song.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SongsListComponent implements OnInit {

    constructor(private routeParams: ActivatedRoute,
        private songService: SongService)
    { }

    @Input() songs: any[];
    @Input() searchPattern: string;
    @Input() parameters: string[];
    @Input() sortType;
    @Input() sortOrder;
    @Input() showIcons;
    @Input() favoriteSongs;
    @Output() addFavoriteActivated = new EventEmitter<any>();
    @Output() removeFavoriteActivated = new EventEmitter<any>();

    ngOnInit() {

    }

    addFavoriteSong(event) {
        let song;
        event.preventDefault();

        this.songService.getSong(event.path["1"].id)
            .subscribe(res => {
                song = res;
                this.addFavoriteActivated.emit(song);
            },
            err => {
                console.log(err);
            })
    }

    removeFavoriteSong(event) {
        let song;
        event.preventDefault();

        this.songService.getSong(event.path["1"].id)
            .subscribe(res => {
                song = res;
                this.removeFavoriteActivated.emit(song);
            },
            err => {
                console.log(err);
            })

    }
}