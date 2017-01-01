import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {GlobalEventsManager} from '../../../services/globalEventsManager';
import {AuthenticationService} from '../../../services/authentication.service';
import { NotificationsService } from 'angular2-notifications';
import { routerTransition } from '../../../animations/router.animations';
import { User } from '../../../models/user.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})

export class RegisterComponent implements OnInit {
    public user: FormGroup;
    model: any = {};
    options: Object;
    isAuth: string = 'false';

    constructor(private fb: FormBuilder,
                private router: Router,
                private authenticationService: AuthenticationService,
                private notificationsService: NotificationsService,
                private globalEventsManager: GlobalEventsManager) {
    }

    ngOnInit() {
        this.options = { timeOut: 2000, pauseOnHover: true, showProgressBar: false, animate: 'fromRight', position: ['right', 'bottom'], theClass: 'custom-notification', icons: null };

        this.user = this.fb.group({
          'username': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
          'firstName': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
          'lastName': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
          'email': ['', Validators.compose([Validators.required, Validators.pattern(/^([\w\d\-\._]+@[\w\d]+\.[\w]{2,3})$/)])],
          'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
          'confirmPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });
    }

    register() {
        this.model = this.user.value;

        let user = new User(this.model.username, this.model.password, this.model.firstName, this.model.lastName, this.model.email, 'default-avatar.jpg', [], [], [], [], []);

        this.authenticationService.register(user)
            .subscribe(
                result => {
                    if (result === true) {
                        this.notificationsService.success('', 'Successful registration. Please login.');

                        setTimeout(() => this.router.navigate(['login']), 2000);
                    }
                },
                error => {
                    let message = JSON.parse(error._body);

                    this.notificationsService.error('', message);
                }
            );
    }
}