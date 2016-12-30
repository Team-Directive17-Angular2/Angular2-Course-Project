import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

import { UserService } from '../../../services/user.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
    model: any = {};
    options: Object;
    file: any;
    fileName: string;

    constructor(private router: Router,
        private routeParams: ActivatedRoute,
        private notificationsService: NotificationsService,
        private userService:UserService) { }

    @Input() uFirstName: string;
    @Input() uLastName: string;
    @Input() uEmail: string;
    @Output() informationUpdated = new EventEmitter<any>();

    ngOnInit() {
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
        this.fileName = 'No file chosen';
    }

    public onProfilePictureUpload(event: any): void {
        event.preventDefault();
        this.file = event.target.files[0];
        this.fileName = this.file.name;
    }

    public uploadProfilePicture() {
        if(this.file.type === 'image/jpeg' || this.file.type === 'image/png') {

            let reader: FileReader = new FileReader();
            reader.readAsDataURL(this.file);

            reader.onload = () => {
                let username = JSON.parse(localStorage.getItem('currentUser')).username;
                let dataUrl = reader.result;

                this.userService.updateUserProfilePicture(username, dataUrl)
                    .subscribe(res => {
                        if (res) {
                            this.notificationsService.success('', 'Successfully saved profile picture');
                            this.fileName = 'No file chosen';
                            this.informationUpdated.emit();
                        } else {
                            this.notificationsService.error('', 'Problem occured with saving the picture. Please try again later.');
                        }
                    },
                    error => {
                        let message = JSON.parse(error._body);

                        this.notificationsService.error('', message);
                    });
            };
        } else {
            this.notificationsService.alert('', 'Please upload .jped or .png file.');
        }
    }

    public updateInformation() {
        this.userService.updateInformation(this.model.firstName, this.model.lastName, this.model.email)
            .subscribe(result => {
                if (result === true) {
                    this.notificationsService.success('', 'Successfully updated information');
                    this.informationUpdated.emit();
                } else {
                    this.notificationsService.error('', 'Problem occured while updating your information. Please try again later.');
                }
            },
            error => {
                let message = JSON.parse(error._body);

                this.notificationsService.error('', message);
            });
    }

    public updatePassword() {

        this.userService.updatePassword(this.model.oldPassword, this.model.newPassword)
            .subscribe(result => {
                if (result === true) {
                    this.notificationsService.success('', 'Successfully updated password');
                    // this.informationUpdated.emit();
                } else {
                    this.notificationsService.error('', 'Problem occured while updating your password. Please try again later.');
                }
            },
            error => {
                let message = JSON.parse(error._body);

                this.notificationsService.error('', message);
            });

    }
}
