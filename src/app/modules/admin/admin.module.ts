import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { appRoutes } from '../../config/routes';
import { AddArtistComponent } from '../admin/addArtist/addArtist.component';
import { ArtistService } from '../../services/artist.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  declarations: [
      AddArtistComponent
  ],
  providers: [ArtistService]
})

export class AdminModule { }