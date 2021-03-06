import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'

import { Album } from '../models/album.model';
@Injectable()
export class AlbumService {

  constructor(private http: Http) {

  }

  addAlbum(model:any, dataUrl:string): Observable<string> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers:headers});
    let body = {
    artist: model.artist,
    genres: model.genres,
    year:model.year,
    name:model.name,
    songs: model.songs,
    dataUrl: dataUrl
    };
    console.log(body);
    return this.http.post('/api/album', body, options)
      .map((response: Response) => {

        return response.json();
      })
  }

  getAlbums(): Observable<any[]> {
  return this.http.get('/api/albums')
      .map((response: Response) => {
          return response.json().data;
      })
  }

  getAlbum(id: string): Observable<any> {
    return this.http.get('/api/albums/' + id)
      .map((response: Response) => {

        return response.json().data;
      })
  }
}