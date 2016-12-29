import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import {GlobalEventsManager} from './globalEventsManager';
import { Artist } from '../models/artist.model';

@Injectable()
export class ArtistService {
  public token: string;
  public username: string;

  constructor(private http: Http, private globalEventsManager: GlobalEventsManager) {

  }

  AddArtist(model:Artist): Observable<string> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers:headers});
    let body = {
    artist: model.artist,
    genres: model.genres,
    yearsActive:model.yearsActive,
    albums:model.albums,
    nationality: model.nationality,
    imgUrl: model.imgUrl,
    bio: model.bio,
    user: localStorage.getItem('currentUser')
    };
    console.log(body);
    return this.http.post('/api/artist', body, options)
      .map((response: Response) => {

        return response.json();
      })
  }

}