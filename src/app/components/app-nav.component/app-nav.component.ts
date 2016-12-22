import {Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'
import {GlobalEventsManager} from '../../services/globalEventsManager';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html'
})
export class NavComponent implements OnInit {

    user: boolean = localStorage.getItem('currentUser') ? true : false;
    auth: AuthenticationService;

    constructor(private globalEventsManager: GlobalEventsManager) {
        this.globalEventsManager.showNavBarEmitter.subscribe((mode)=> {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (mode !== null) {
                this.user = mode;
            }
        });
    }

    ngOnInit() {
        this.user = localStorage.getItem('currentUser') ? true : false;
        console.log(this.user);

    }

}