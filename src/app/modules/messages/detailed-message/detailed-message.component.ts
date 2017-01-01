import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

import { Message } from '../../../models/message.model';
import { MessageService } from '../../../services/message.service';
import { UserService } from '../../../services/user.service';
import { NotificationsService } from 'angular2-notifications';
import { routerTransition } from '../../../animations/router.animations';

@Component({
  selector: 'app-detailed-message',
  templateUrl: './detailed-message.component.html',
  styleUrls: ['./detailed-message.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  encapsulation: ViewEncapsulation.None
})
export class DetailedMessageComponent implements OnInit, OnDestroy {
    message: Message;
    name:string;
    email:string;
    title:string;
    content:string;
    sendOn:string;
    processedBy: string;
    status: string;
    statuses: any[];
    id: string;
    options: Object;

    private currentUsername: string;
    private subscription: any;

    constructor(private router: Router,
        private routeParams: ActivatedRoute,
        private notificationsService: NotificationsService,
        private messageService:MessageService,
        private userService:UserService)
    { }

    ngOnInit() {
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUsername = currentUser.username;

        this.statuses = ["Not Processed", "In Process", "Processed"];

        this.subscription = this.routeParams.params.subscribe(params => {
            this.id = params['id'];

            this.updateMessageInformation(this.id);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    updateMessageInformation(id: string) {

        this.messageService.getMessage(id)
        .subscribe( message => {
            this.message = message;
            this.name = message.name;
            this.email = message.email;
            this.title = message.title;
            this.sendOn = message.sendOn;
            this.content = message.content;
            this.processedBy = message.processedBy;
            this.status = message.status;
        },
        error => {
            this.router.navigate(['error']);
        });
    };

    updateStatus() {
        this.messageService.updateStatus(this.id, this.currentUsername, this.status)
        .subscribe( result => {
            if(result) {
                this.notificationsService.success('', 'Successfully updated message status');
                this.updateMessageInformation(this.id);
            } else{
                this.notificationsService.error('', `Unsuccessfully updated message status. Please try again later.`);
            }
        })
    }
}
