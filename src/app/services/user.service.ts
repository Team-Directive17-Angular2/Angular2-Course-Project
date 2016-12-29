import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import {GlobalEventsManager} from './globalEventsManager';
import {User} from '../models/user.model';

@Injectable()
export class UserService {

  constructor(private http: Http, private globalEventsManager: GlobalEventsManager) {
  }

  getUser(username: string): Observable<User> {
    return this.http.get('/api/user/' + username)
      .map((response: Response) => {

        return response.json().data as User
      })
  }

  getUsers(): Observable<any[]> {
    return this.http.get('/api/users')
        .map((response: Response) => {
            return response.json().data;
        })
  }

  follow(currentUsername: string, username: string): Observable<boolean> {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let body = { currentUsername: currentUsername, username: username };

      return this.http.put('/api/follow', body, options)
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
