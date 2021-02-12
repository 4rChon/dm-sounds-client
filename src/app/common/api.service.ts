import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlaylistModel } from '../playlist/playlist.model';

@Injectable({ providedIn: 'root' })
export class APIService {

  private jsonHeaders = new HttpHeaders({ 'content-type': 'application/json' });

  constructor(private readonly httpClient: HttpClient) { }

  public getAudioStreamUrl(id: string): string {
    return `${environment.api}/stream/${id}`;
  }

  public getAudioStream(id: string): Observable<ArrayBuffer> {
    return this.httpClient.get(`${environment.api}/stream/${id}`, {
      responseType: 'arraybuffer',
    });
  }

  public getPlaylists(): Observable<Array<PlaylistModel>> {
    return this.httpClient.get<Array<PlaylistModel>>(
      `${environment.api}/playlist/`, { headers: this.jsonHeaders }
    );
  }
}
