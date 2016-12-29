import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../../config/routes';

import { Ng2PaginationModule } from 'ng2-pagination';

import { ProfileComponent } from './profile.component';
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
        ProfileComponent,
    ],
    providers: [
        UserService,
        NotificationsService
    ]
})
export class ProfileModule { }