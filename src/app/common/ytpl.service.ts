import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as ytpl from 'ytpl';
import { PlaylistModel } from '../playlist/playlist.model';

@Injectable({ providedIn: 'root' })
export class YTPLService {
  constructor(private readonly httpClient: HttpClient) {}

  private jsonHeaders = new HttpHeaders({ 'content-type': 'application/json' });

  public getPlaylistItems(url: string): Observable<PlaylistModel> {
    return this.httpClient.get<PlaylistModel>(
      `${environment.api}/playlist/${url}`,
      {
        headers: this.jsonHeaders,
      }
    );
  }
}
