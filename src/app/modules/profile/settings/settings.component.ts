import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { UserService } from '../../../services/user.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {

    options: Object;

    constructor(private routeParams: ActivatedRoute,
        private notificationsService: NotificationsService,
        private userService:UserService) { }


    ngOnInit() {
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
    }

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
                            // this.updateUserInformation(this.username);
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
