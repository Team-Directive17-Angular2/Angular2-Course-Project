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

    constructor(private router: Router,
          private artistService: ArtistService, private globalEventsManager: GlobalEventsManager) {
    }
    
    ngOnInit() {
       
    }

    AddArtist(){
        this.loading = true;
        this.model.yearsActive = this.model.from +' - ' + this.model.to
        console.log(this.model);

        this.artistService.AddArtist(this.model)
        .subscribe(result => {
            this.successMsg = result;
        })

        setTimeout(()=>{
            this.successMsg = '';
        },2000);
        
    }
}