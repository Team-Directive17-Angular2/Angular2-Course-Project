import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../../directives/directives.module';
import { appRoutes } from '../../config/routes';

import { Ng2PaginationModule } from 'ng2-pagination';

import { SearchPipeModule } from '../../pipes/search.pipe.module';
import { SortPipeModule } from '../../pipes/sort.pipe.module'
import { SongDurationPipeModule } from '../../pipes/song-duration.pipe.module'

import { SongsComponent } from '../songs/all-songs/songs.component';
import { SongsListComponent } from '../songs/all-songs/songs-list/songs-list.component';
import { SimpleNotificationsModule, NotificationsService } from '../../../../node_modules/angular2-notifications';
import { SongService } from '../../services/song.service';
import { UserService } from '../../services/user.service';

@NgModule({
    declarations: [
        SongsComponent,
        SongsListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SimpleNotificationsModule,
        Ng2PaginationModule,
        DirectivesModule,
        SortPipeModule,
        SearchPipeModule,
        SongDurationPipeModule,
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    providers: [
        SongService,
        UserService,
        NotificationsService
    ]
})
export class SongsModule { }
