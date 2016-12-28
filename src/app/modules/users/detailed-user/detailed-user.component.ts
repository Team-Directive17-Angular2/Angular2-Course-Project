import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { routerTransition } from '../../../animations/router.animations';

@Component({
  selector: 'app-detailed-user',
  templateUrl: './detailed-user.component.html',
  styleUrls: ['./detailed-user.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class DetailedUserComponent implements OnInit, OnDestroy {
    user:User;
    username:string;
    firstName:string;
    lastName:string;
    email:string;
    avatar:string;

    private subscription: any;

    constructor(private routeParams: ActivatedRoute,
        private userService:UserService)
    { }

  ngOnInit() {
    this.subscription = this.routeParams.params.subscribe(params => {
        let username = params['username'];

        this.userService.getUser(username)
        .subscribe( user => {
            this.user = user;
            this.username = user.username;
            this.email = user.email;
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.avatar = user.avatar;
        });
    });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

}
