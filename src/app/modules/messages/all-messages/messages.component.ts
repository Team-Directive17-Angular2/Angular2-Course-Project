import { Component, OnInit, OnDestroy } from '@angular/core';
import { routerTransition } from '../../../animations/router.animations';
import { MessageService }  from '../../../services/message.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class MessagesComponent implements OnInit, OnDestroy {

    messages: any[];
    statuses: string[];
    status: string;
    searchPattern: string;
    parameters: string[];
    sortTypes: string[];
    sortOrders: string[];
    sortType: string;
    sortOrder: string;

    options: Object;
    private subscription: any;

  constructor(private messageService: MessageService,
      private notificationsService: NotificationsService,) {

        this.parameters = ['title', 'email'];
        this.searchPattern = '';

        this.statuses = ['Not Processed', 'In Process', 'Processed'];
        this.sortTypes = ['Send On', 'Title', 'Email'];
        this.sortOrders = ['Descending', 'Ascending'];

        this.status = this.statuses[0];
        this.sortType = this.sortTypes[0];
        this.sortOrder = this.sortOrders[0];
   }

  ngOnInit() {
    this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };

      this.subscription = this.messageService.getMessages()
       .subscribe((result) => {
         this.messages = result;
     });
  }

 ngOnDestroy() {
   this.subscription.unsubscribe();
 }
}
