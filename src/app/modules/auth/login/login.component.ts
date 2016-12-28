import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalEventsManager} from '../../../services/globalEventsManager';
import {AuthenticationService} from '../../../services/authentication.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    options: Object;
    isAuth: string = 'false';

    constructor(private router: Router,
                private authenticationService: AuthenticationService,
                private notificationsService: NotificationsService,
                private globalEventsManager: GlobalEventsManager) {
    }

    ngOnInit() {
        this.authenticationService.logout();
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
    }

    login() {
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    let username = JSON.parse(localStorage["currentUser"]).username;

                    this.notificationsService.success('', `Welcome ${username}.`);

                    setTimeout(() => this.router.navigate(['/']), 2000);
                } else {
                    this.notificationsService.error('', 'Username or password is incorrect.');
                }
            });
    }
}