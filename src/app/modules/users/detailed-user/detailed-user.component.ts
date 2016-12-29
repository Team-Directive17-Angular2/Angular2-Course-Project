import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { NotificationsService } from 'angular2-notifications';
import { routerTransition } from '../../../animations/router.animations';

@Component({
  selector: 'app-detailed-user',
  templateUrl: './detailed-user.component.html',
  styleUrls: ['./detailed-user.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  encapsulation: ViewEncapsulation.None
})
export class DetailedUserComponent implements OnInit, OnDestroy {
    user:User;
    username:string;
    firstName:string;
    lastName:string;
    email:string;
    avatar:string;
    followers: any[];
    followings: any[];
    favoriteArtists: any[];
    favoriteAlbums: any[];
    favoriteSongs: any[];
    options: Object;

    private currentUsername: string;
    private followed: boolean;
    private subscription: any;

    constructor(private routeParams: ActivatedRoute,
        private notificationsService: NotificationsService,
        private userService:UserService)
    { }

    ngOnInit() {
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUsername = currentUser.username;

        this.subscription = this.routeParams.params.subscribe(params => {
            let username = params['username'];

            this.updateUserInformation(username);
        });


    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    updateUserInformation(username: string) {
        this.userService.getUser(username)
        .subscribe( user => {
            this.user = user;
            this.username = user.username;
            this.email = user.email;
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.avatar = user.avatar;
            this.followers = user.followers;
            this.followings = user.followings;
            this.favoriteArtists = user.favoriteArtists;
            this.favoriteAlbums = user.favoriteAlbums;
            this.favoriteSongs = user.favoriteSongs;

            this.followed = false;

            for (let follower of this.followers) {
                if(follower.username === this.currentUsername) {
                    this.followed = true;
                    break;
                }
            }
        },
        error => {
            console.log('REDIRECT TO ERROR PAGE');
        });
    };

    follow() {
        this.userService.follow(this.currentUsername, this.username, true)
        .subscribe( result => {
            if(result) {
                this.notificationsService.success('', `Successfully followed ${this.username}.`);
                this.updateUserInformation(this.username);
            } else{
                this.notificationsService.error('', `Unsuccessfully followed ${this.username}. Please try again later.`);
            }
        })
    }

    unfollow() {
        this.userService.follow(this.currentUsername, this.username, false)
        .subscribe( result => {
            console.log(result);
            if(result) {
                this.notificationsService.success('', `Successfully unfollowed ${this.username}.`);
                this.updateUserInformation(this.username);
            } else{
                this.notificationsService.error('', `Unsuccessfully unfollowed ${this.username}. Please try again later.`);
            }
        })
    }

}
