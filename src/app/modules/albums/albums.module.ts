import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../../directives/directives.module';
import { SearchPipeModule } from '../../pipes/search.pipe.module';
import { SortPipeModule } from '../../pipes/sort.pipe.module';
import { FilterGenrePipeModule } from '../../pipes/filter-genre.pipe.module';

import { appRoutes } from '../../config/routes';

import { Ng2PaginationModule } from 'ng2-pagination';

import { AlbumsComponent } from './all-albums/albums.component';
import { AlbumsListComponent } from './all-albums/albums-list/albums-list.component';
import { DetailedAlbumComponent } from './detailed-album/detailed-album.component';
import { AlbumService } from '../../services/album.service';
import { SimpleNotificationsModule, NotificationsService } from '../../../../node_modules/angular2-notifications';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SimpleNotificationsModule,
        Ng2PaginationModule,
        DirectivesModule,
        SearchPipeModule,
        SortPipeModule,
        FilterGenrePipeModule,
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    declarations: [
        AlbumsComponent,
        AlbumsListComponent,
        DetailedAlbumComponent
    ],
    providers: [
        AlbumService,
        NotificationsService
    ],
    exports: []
})
export class AlbumsModule { }
