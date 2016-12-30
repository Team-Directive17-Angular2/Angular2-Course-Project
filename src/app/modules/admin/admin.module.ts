import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { appRoutes } from '../../config/routes';
import { AddArtistComponent } from '../admin/addArtist/addArtist.component';
import { ArtistService } from '../../services/artist.service';
import { AddAlbumComponent } from '../admin/addAlbum/addAlbum.component';
import { AlbumService } from '../../services/album.service';
import { SongService } from '../../services/song.service';
import { AddSongComponent } from '../admin/addSong/addSong.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  declarations: [
      AddArtistComponent,
      AddAlbumComponent,
      AddSongComponent
  ],
  providers: [
    ArtistService,
    AlbumService,
    SongService
    ]
})

export class AdminModule { }