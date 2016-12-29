import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../../config/routes';

import { Ng2PaginationModule } from 'ng2-pagination';

import { UsersComponent } from './all-users/users.component';
import { SearchPipe, SortPipe } from '../../pipes';
import { DetailedUserComponent } from './detailed-user/detailed-user.component';
import { UserService } from '../../services/user.service';
import { SimpleNotificationsModule, NotificationsService } from '../../../../node_modules/angular2-notifications';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SimpleNotificationsModule,
        Ng2PaginationModule,
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    declarations: [
        UsersComponent,
        DetailedUserComponent,
        SearchPipe,
        SortPipe
    ],
    providers: [
        UserService,
        NotificationsService
    ]
})
export class UsersModule { }
