import {Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'
import {GlobalEventsManager} from '../../services/globalEventsManager';
import {Router} from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.css']
})
export class NavComponent implements OnInit {

    user: boolean = localStorage.getItem('currentUser') ? true : false;
    auth: AuthenticationService;
    username:string;
    constructor(private router: Router, private globalEventsManager: GlobalEventsManager) {
        this.globalEventsManager.showNavBarEmitter.subscribe((mode)=> {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (mode !== null) {
                this.user = mode;
            }
        });
    }

    ngOnInit() {
        this.user = localStorage.getItem('currentUser') ? true : false;
        var currentUser = localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'));
        this.username = currentUser && currentUser.username;
    }

    onProfileRoute(){
        event.preventDefault();
        var currentUser = localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'));
        this.username = currentUser && currentUser.username;
        this.router.navigate(['/profile',this.username]);
    }

}