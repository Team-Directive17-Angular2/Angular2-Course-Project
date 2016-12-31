import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../../directives/directives.module';
import { appRoutes } from '../../config/routes';

import { Ng2PaginationModule } from 'ng2-pagination';

import { UsersComponent } from './all-users/users.component';
import { UsersListComponent } from './all-users/users-list/users-list.component';
import { DetailedUserComponent } from './detailed-user/detailed-user.component';
import { FollowListComponent } from './detailed-user/follow-list/follow-list.component';
import { ArtistsListComponent } from './detailed-user/artists-list/artists-list.component';
import { AlbumsListComponent } from './detailed-user/albums-list/albums-list.component';
import { SongsListComponent } from './detailed-user/songs-list/songs-list.component';

import { UserService } from '../../services/user.service';
import { SimpleNotificationsModule, NotificationsService } from '../../../../node_modules/angular2-notifications';

import { SearchPipeModule } from '../../pipes/search.pipe.module';
import { SortPipeModule } from '../../pipes/sort.pipe.module';
import { SongDurationPipeModule } from '../../pipes/song-duration.pipe.module'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SimpleNotificationsModule,
        Ng2PaginationModule,
        DirectivesModule,
        SearchPipeModule,
        SortPipeModule,
        SongDurationPipeModule,
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    declarations: [
        UsersComponent,
        UsersListComponent,
        DetailedUserComponent,
        FollowListComponent,
        ArtistsListComponent,
        AlbumsListComponent,
        SongsListComponent
    ],
    providers: [
        UserService,
        NotificationsService
    ]
})
export class UsersModule { }
