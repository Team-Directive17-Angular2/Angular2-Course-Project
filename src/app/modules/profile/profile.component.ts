import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
    user:User;
    username:string;
    firstName:string;
    lastName:string;
    email:string;

    constructor(private userService:UserService ) {

     }

    ngOnInit() {
       this.userService.getUserProfile()
       .subscribe( user => {
           this.user = user;
           this.username = user.username;
           this.email = user.email;
           this.firstName = user.firstName;
           this.lastName = user.lastName;
        });
    }

    IsAuthUsersProfie():boolean{
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser.username == this.username){
            return true;
        }

        return false;
    }

}