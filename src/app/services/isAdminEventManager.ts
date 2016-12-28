import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';

@Injectable()
export class IsAdminEventsManager {

    private _showAdminNav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
    public showAdminNavEmitter: Observable<boolean> = this._showAdminNav.asObservable();

    constructor() {}

    showAdminNav(ifShow: boolean) {
        this._showAdminNav.next(ifShow);
    }


}