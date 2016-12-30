import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import { Song } from '../models/song.model';

@Injectable()
export class SongService {


  constructor(private http: Http) {

  }

  AddSong(model:any): Observable<string> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers:headers});
    let body = {
    name:model.name,
    artist: model.artist,
    duration: model.duration,

    };
    console.log(body);
    return this.http.post('/api/song', body, options)
      .map((response: Response) => {

        return response.json();
      })
  }

}