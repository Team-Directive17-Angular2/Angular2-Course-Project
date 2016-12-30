import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalEventsManager} from '../../../services/globalEventsManager';
import { ArtistService } from '../../../services/artist.service';
import { Artist } from '../../../models/artist.model'
import { routerTransition } from '../../../animations/router.animations';

@Component({
    selector: 'app-addArtist',
    templateUrl: './addArtist.component.html',
    styleUrls: ['./addArtist.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})

export class AddArtistComponent implements OnInit {
    model:any = {};
    loading = false;
    error = '';
    successMsg = '';
    genr:any;
    genresCollection:string[];
    
    constructor(private router: Router,
          private artistService: ArtistService, private globalEventsManager: GlobalEventsManager) {
    }
    
    ngOnInit() {
       this.genresCollection = ["Pop", "Jazz", "Metal", "Rock", "Hip-Hop", "Rap", "Electronic", "Country", "Blues"];
    }
    change(options) {
    this.genr = Array.apply(null,options)  // convert to real array
      .filter(option => option.selected)
      .map(option => option.value)
  }
    AddArtist(){
        this.loading = true;
        this.model.yearsActive = this.model.from +' - ' + this.model.to
        this.model.genres = this.genr
        console.log(this.model);
        console.log(this.genr);
        this.artistService.AddArtist(this.model)
        .subscribe(result => {
            this.successMsg = result;
        });

        setTimeout(()=>{
            this.successMsg = '';
        },2000);
        
    }
}