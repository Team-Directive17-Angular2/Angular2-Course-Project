import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'

import { Message } from '../models/message.model';
@Injectable()
export class MessageService {

  constructor(private http: Http) {

  }

  getMessages(): Observable<any[]> {
  return this.http.get('/api/messages')
      .map((response: Response) => {
          return response.json().data;
      })
  }

  getMessage(id: string): Observable<any> {
    return this.http.get('/api/messages/' + id)
      .map((response: Response) => {

        return response.json().data;
      })
  }

  updateStatus(id: string, username: string, status: string) : Observable<boolean> {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let body = { username:username, status: status };

      return this.http.put('/api/messages/' + id, body, options)
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