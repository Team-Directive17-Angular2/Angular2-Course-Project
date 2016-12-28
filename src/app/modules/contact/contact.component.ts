import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GlobalEventsManager} from '../../services/globalEventsManager';
import {ContactService} from '../../services/contact.service';
import { NotificationsService } from 'angular2-notifications';
import { routerTransition } from '../../animations/router.animations';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ContactComponent implements OnInit {
    model: any = {};
    options: Object;
    isAuth: string = 'false';

    constructor(private router: Router,
                private notificationsService: NotificationsService,
                private contactService: ContactService,
                private globalEventsManager: GlobalEventsManager) {
    }

    ngOnInit() {
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
    }

    contact() {
        let contact = new Contact(this.model.name, this.model.email, this.model.title, this.model.content);

        this.contactService.contact(contact)
            .subscribe(
                result => {
                    if (result === true) {
                        this.notificationsService.success('', 'Successful sending. We will reply as soon as possible.');

                        setTimeout(() => this.router.navigate(['']), 2000);
                    }
                },
                error => {
                    let message = JSON.parse(error._body);

                    this.notificationsService.error('', message);
                }
            );
    }

}
