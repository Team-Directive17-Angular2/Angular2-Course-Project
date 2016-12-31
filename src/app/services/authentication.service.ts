import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import {GlobalEventsManager} from './globalEventsManager';
import { IsAdminEventsManager } from './isAdminEventManager';
import { User } from '../models/user.model';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http, private globalEventsManager: GlobalEventsManager, private isAdminEventManager:IsAdminEventsManager) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify({username: username, password: password});

        return this.http.post('/api/authenticate', body, options)
            .map((response: Response) => {
                //console.log(response.json().result);
                // login successful if there's a jwt token in the response
                let token = response.json().auth_token;
                let role = response.json().role;
                let favoriteArtists = response.json().favoriteArtists;
                let favoriteAlbums = response.json().favoriteAlbums;
                let favoriteSongs = response.json().favoriteSongs;

                if (token) {
                    // set token property
                    this.token = token;
                     if(role == 'Admin'){
                        this.isAdminEventManager.showAdminNav(true);
                    }
                    else{
                        this.isAdminEventManager.showAdminNav(false);
                    }
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({username: username, favoriteArtists: favoriteArtists, favoriteAlbums: favoriteAlbums, favoriteSongs: favoriteSongs, token: token, role:role}));
                    this.globalEventsManager.showNavBar(true);
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    this.globalEventsManager.showNavBar(false);
                    this.isAdminEventManager.showAdminNav(false);
                    return false;
                }
            });
    }

    register(user: User) : Observable<boolean> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(user);

        return this.http.post('/api/register', body, options)
        .map((response:Response) => {
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
        this.isAdminEventManager.showAdminNav(false);
        localStorage.removeItem('currentUser');
    }
}