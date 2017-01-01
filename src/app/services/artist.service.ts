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

  addArtist(model:any, dataUrl: string): Observable<string> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers:headers});
    let body = {
    name: model.name,
    genres: model.genres,
    yearsActive:model.yearsActive,
    nationality: model.nationality,
    bio: model.bio,
    dataUrl: dataUrl
    };

    return this.http.post('/api/artist', body, options)
      .map((response: Response) => {

        return response.json();
      })
  }

  getArtistsNames(): Observable<any[]> {
  return this.http.get('/api/artists-names')
      .map((response: Response) => {
          return response.json().data;
      })
  }

  getArtists(): Observable<any[]> {
  return this.http.get('/api/artists')
      .map((response: Response) => {
          return response.json().data;
      })
  }

  getArtist(id: string): Observable<any> {
    return this.http.get('/api/artists/' + id)
      .map((response: Response) => {

        return response.json().data;
      })
  }

}