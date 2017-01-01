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
}