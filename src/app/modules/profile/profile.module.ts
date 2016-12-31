import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../../directives/directives.module';
import { appRoutes } from '../../config/routes';

import { Ng2PaginationModule } from 'ng2-pagination';

import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FollowListComponent } from './follow-list/follow-list.component';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { SongsListComponent } from './songs-list/songs-list.component';

import { UserService } from '../../services/user.service';
import { SimpleNotificationsModule, NotificationsService } from '../../../../node_modules/angular2-notifications';

import { SongDurationPipeModule } from '../../pipes/song-duration.pipe.module'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SimpleNotificationsModule,
        Ng2PaginationModule,
        DirectivesModule,
        SongDurationPipeModule,
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    declarations: [
        ProfileComponent,
        SettingsComponent,
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
export class ProfileModule { }