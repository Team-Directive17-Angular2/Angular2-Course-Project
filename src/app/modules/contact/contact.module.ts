import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ContactComponent } from './contact.component';
import { ContactService } from '../../services/contact.service';
import { SimpleNotificationsModule, NotificationsService } from '../../../../node_modules/angular2-notifications';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SimpleNotificationsModule
    ],
    declarations: [
        ContactComponent
    ],
    providers: [
        ContactService,
        NotificationsService
    ]
})
export class ContactModule { }
