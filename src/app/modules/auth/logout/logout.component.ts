import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalEventsManager} from '../../../services/globalEventsManager';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
    template: ''
})

export class LogoutComponent implements OnInit {

    constructor(private router: Router,
                private authenticationService: AuthenticationService, private globalEventsManager: GlobalEventsManager) {
    }

    ngOnInit() {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    }
}