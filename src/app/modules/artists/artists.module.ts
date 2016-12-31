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

import { ArtistsComponent } from './all-artists/artists.component';
import { ArtistsListComponent } from './all-artists/artists-list/artists-list.component';
import { DetailedArtistComponent } from './detailed-artist/detailed-artist.component';
import { AboutComponent } from './detailed-artist/about/about.component';
import { AlbumsListComponent } from './detailed-artist/albums-list/albums-list.component';
import { SinglesListComponent } from './detailed-artist/singles-list/singles-list.component';
import { ArtistService } from '../../services/artist.service';
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
        ArtistsComponent,
        ArtistsListComponent,
        DetailedArtistComponent,
        AboutComponent,
        AlbumsListComponent,
        SinglesListComponent
    ],
    providers: [
        ArtistService,
        NotificationsService
    ],
    exports: []
})
export class ArtistsModule { }
