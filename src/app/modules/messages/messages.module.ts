import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../../directives/directives.module';
import { appRoutes } from '../../config/routes';

import { Ng2PaginationModule } from 'ng2-pagination';

import { SearchPipeModule } from '../../pipes/search.pipe.module';
import { SortPipeModule } from '../../pipes/sort.pipe.module'
import { FilterStatusPipeModule } from '../../pipes/filter-status.pipe.module'

import { MessagesComponent } from './all-messages/messages.component';
import { MessagesListComponent } from './all-messages/messages-list/messages-list.component';
import { SimpleNotificationsModule, NotificationsService } from '../../../../node_modules/angular2-notifications';
import { DetailedMessageComponent } from './detailed-message/detailed-message.component';
import { MessageService } from '../../services/message.service';
import { UserService } from '../../services/user.service';

@NgModule({
    declarations: [
        MessagesComponent,
        MessagesListComponent,
        DetailedMessageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SimpleNotificationsModule,
        Ng2PaginationModule,
        DirectivesModule,
        SortPipeModule,
        SearchPipeModule,
        FilterStatusPipeModule,
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    providers: [
        MessageService,
        UserService,
        NotificationsService
    ]
})
export class MessagesModule { }
