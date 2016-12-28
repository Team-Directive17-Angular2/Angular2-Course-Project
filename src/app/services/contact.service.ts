import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import {GlobalEventsManager} from './globalEventsManager';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactService {
    public token: string;

    constructor(private http: Http, private globalEventsManager: GlobalEventsManager) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    contact(contact: Contact) : Observable<boolean> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(contact);

        return this.http.post('/api/contact', body, options)
        .map((response:Response) => {
            if(response.status === 201){
                return true;
            }
            else{
                return false;
            }
        })
    }
}