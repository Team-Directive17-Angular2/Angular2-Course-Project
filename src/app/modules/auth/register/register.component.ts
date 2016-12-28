import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalEventsManager} from '../../../services/globalEventsManager';
import {AuthenticationService} from '../../../services/authentication.service';
import { NotificationsService } from 'angular2-notifications';
import { routerTransition } from '../../../animations/router.animations';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})

export class RegisterComponent implements OnInit {
    model: any = {};
    options: Object;
    isAuth: string = 'false';

    constructor(private router: Router,
                private authenticationService: AuthenticationService,
                private notificationsService: NotificationsService,
                private globalEventsManager: GlobalEventsManager) {
    }

    ngOnInit() {
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };
    }

    register() {
        if(this.model.password == this.model.confirmPass) {
            this.authenticationService.register(this.model.username, this.model.password, this.model.firstName, this.model.lastName, this.model.email)
                .subscribe(
                    result => {
                        if (result === true) {
                            this.notificationsService.success('', 'Successful registration. Please login.');

                            setTimeout(() => this.router.navigate(['login']), 2000);
                            this.router.navigate(['login']);
                        }
                    },
                    error => {
                        let message = JSON.parse(error._body);

                        this.notificationsService.error('', message);
                    }
                );
        }
        else{
            this.notificationsService.error('', "Passwords do not match.");
        }
    }
}