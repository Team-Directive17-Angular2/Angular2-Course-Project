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
import { UpdateRoleComponent } from '../admin/updateUserRole/update-role.component'
import { SimpleNotificationsModule, NotificationsService } from '../../../../node_modules/angular2-notifications';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { Ng2PaginationModule } from 'ng2-pagination';
import { AdminsListComponent } from '../admin/updateUserRole/list-admins/list-admins.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SimpleNotificationsModule,
    Ng2AutoCompleteModule,
    Ng2PaginationModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  declarations: [
      AddArtistComponent,
      AddAlbumComponent,
      AddSongComponent,
      UpdateRoleComponent,
      AdminsListComponent
  ],
  providers: [
    ArtistService,
    AlbumService,
    SongService,
    NotificationsService,
    ]
})

export class AdminModule { }