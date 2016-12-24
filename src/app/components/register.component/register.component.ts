import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalEventsManager} from '../../services/globalEventsManager';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    isAuth: string = 'false';

    constructor(private router: Router,
                private authenticationService: AuthenticationService, private globalEventsManager: GlobalEventsManager) {
    }

    ngOnInit() {
        // reset login status
       // this.authenticationService.logout();
    }

    register() {
        if(this.model.password == this.model.confirmPass){
        this.loading = true;
        this.authenticationService.register(this.model.username, this.model.password, this.model.firstName, this.model.lastName, this.model.email)
            .subscribe(
                result => {
                    if (result === true) {
                        this.router.navigate(['login']);
                    }
                },
                error => {
                    this.error = JSON.parse(error._body);
                }
            );
        }
        else{
            this.error = "Password is not the same as Confirm password";
        }
    }
}