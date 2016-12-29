import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { NotificationsService } from 'angular2-notifications';
import { routerTransition } from '../../animations/router.animations';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''},
    encapsulation: ViewEncapsulation.None
})

export class ProfileComponent implements OnInit, OnDestroy {
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
    backupCalled: number;

    private subscription:any;

    constructor(private routeParams: ActivatedRoute,
        private notificationsService: NotificationsService,
        private userService:UserService) {

    }

    ngOnInit() {
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        this.backupCalled = 1;

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));

        this.updateUserInformation(currentUser.username);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    updateUserInformation(username: string) {
        this.subscription = this.userService.getUser(username)
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
        },
        error => {
            console.log('REDIRECT TO ERROR PAGE');
        });
    };

    public onProfilePictureUpload(event: any): void {
        let file = event.target.files[0];

        if(file.type === 'image/jpeg' || file.type === 'image/png') {

            let reader: FileReader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                let username = JSON.parse(localStorage.getItem('currentUser')).username;
                let dataUrl = reader.result;

                this.userService.updateUserProfilePicture(username, dataUrl)
                    .subscribe(res => {
                        if (res) {
                            this.notificationsService.success('', 'Successfully saved profile picture');
                            this.updateUserInformation(this.username);
                        } else {
                            this.notificationsService.error('', 'Problem occured with saving the picture. Please try again later.');
                        }
                    },
                    err => {
                        console.log('Error')
                    });
            };
        } else {
            this.notificationsService.alert('', 'Please upload .jped or .png file.');
        }
    }
}