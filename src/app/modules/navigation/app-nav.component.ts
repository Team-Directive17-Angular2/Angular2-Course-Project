import {Component, OnInit, DoCheck} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'
import {GlobalEventsManager} from '../../services/globalEventsManager';
import { IsAdminEventsManager } from '../../services/isAdminEventManager';
import {Router} from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.css']
})
export class NavComponent implements OnInit, DoCheck {

    user: boolean = localStorage.getItem('currentUser') ? true : false;
    auth: AuthenticationService;
    username:string;
    isAdmin :boolean;

    constructor(private router: Router, private globalEventsManager: GlobalEventsManager, private isAdminEventManager:IsAdminEventsManager) {
        this.globalEventsManager.showNavBarEmitter.subscribe((mode)=> {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (mode !== null) {
                this.user = mode;
            }
        });
        this.isAdminEventManager.showAdminNavEmitter.subscribe((mode) => {
            if(mode !== null){
                this.isAdmin = mode;
            }
        });
    }

    ngOnInit() {
        this.user = localStorage.getItem('currentUser') ? true : false;
        var currentUser = localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'));
        this.username = currentUser && currentUser.username;
        this.isAdmin  = currentUser && currentUser.role == 'Admin';
    }

    ngDoCheck() {
        if(localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser')).username !== this.username)
        {
            var currentUser = localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'));
            this.username = currentUser && currentUser.username;
        }
        if(localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser')).role !== 'Admin' && this.isAdmin)
        {
            this.isAdmin = false;
        }
           if(localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser')).role !== 'User' && !this.isAdmin)
        {
            this.isAdmin = true;
        }
    }
}