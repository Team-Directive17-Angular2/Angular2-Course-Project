import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import {GlobalEventsManager} from './globalEventsManager';
import {User} from '../models/user.model';

@Injectable()
export class UserService {
  public token: string;
  public username: string;

  constructor(private http: Http, private globalEventsManager: GlobalEventsManager) {
    // set token if saved in local storage
    // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // this.username = currentUser.username;
  }

  getUserProfile(): Observable<User> {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.username = currentUser.username;
    return this.http.get('/api/user/' + this.username)
      .map((response: Response) => {

        return response.json().data as User
      })
  }

}
