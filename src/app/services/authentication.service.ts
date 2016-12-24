import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import {GlobalEventsManager} from './globalEventsManager';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http, private globalEventsManager: GlobalEventsManager) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post('/api/authenticate', JSON.stringify({username: username, password: password}), options)
            .map((response: Response) => {
                //console.log(response.json().result);
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().result;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
                    this.globalEventsManager.showNavBar(true);
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    this.globalEventsManager.showNavBar(false);
                    return false;
                }
            });
    }

    register(username:string, password:string, firstName:string, lastName:string, email:string) : Observable<boolean> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify({username: username, password: password, firstName:firstName, lastName:lastName, email:email});

        return this.http.post('/api/register', body, options)
        .map((response:Response) => {
            console.log(response);
            if(response.status === 201){
                return true;
            }
            else{
                return false;
            }
        })
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.globalEventsManager.showNavBar(false);
        localStorage.removeItem('currentUser');
    }
}