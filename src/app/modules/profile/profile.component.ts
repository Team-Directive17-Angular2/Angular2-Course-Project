import { Component, OnInit, OnDestroy } from '@angular/core';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { routerTransition } from '../../animations/router.animations';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''},
    inputs: ['username']
})

export class ProfileComponent implements OnInit, OnDestroy {
    user:User;
    username:string;
    firstName:string;
    lastName:string;
    email:string;
    private subscription:any;

    constructor(private userService:UserService) {

    }

    ngOnInit() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));

        this.subscription = this.userService.getUser(currentUser.username)
        .subscribe( user => {
           this.user = user;
           this.username = user.username;
           this.email = user.email;
           this.firstName = user.firstName;
           this.lastName = user.lastName;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    IsAuthUsersProfie():boolean{
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser.username == this.username){
            return true;
        }

        return false;
    }

}