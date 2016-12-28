import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.role == 'Admin') {
            // if admin status so return true
            return true;
        }

        // otherwise redirect to home page
        this.router.navigate(['/']);
        return false;
    }
}