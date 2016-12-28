import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../../services/user.service';

import { routerTransition } from '../../../animations/router.animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit, OnDestroy {
    users: any[];
    searchPattern: string;
    parameters: string[];
    sortTypes: string[];
    sortOrders: string[];
    sortType: string;
    sortOrder: string;

    private subscription: any;

    constructor(private userService:UserService)
    {
        this.parameters = ['username', 'firstName', 'lastName'];
        this.searchPattern = '';

        this.sortTypes = ['Username', 'First Name', 'Last Name'];
        this.sortOrders = ['Ascending', 'Descending'];

        this.sortType = this.sortTypes[0];
        this.sortOrder = this.sortOrders[0];
    }

    ngOnInit() {
        this.subscription = this.userService.getUsers()
        .subscribe( users => {
            this.users = users;
            console.log(this.users);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
