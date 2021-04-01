import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PlaylistViewModel } from '../playlists';
import { ImportPlaylistViewModel } from '../playlists/playlist-forms/import/import-playlist-view-model';
import { SongViewModel } from '../songs';

@Injectable({ providedIn: 'root' })
export class APIService {

  private jsonHeaders = new HttpHeaders({ 'content-type': 'application/json' });

  constructor(private readonly httpClient: HttpClient) { }

  public getAudioStreamUrl(id: string): string {
    return `${environment.api}/streams/${id}`;
  }

  public getPlaylists(): Promise<Array<PlaylistViewModel>> {
    return this.httpClient.get<Array<PlaylistViewModel>>(
      `${environment.api}/playlists/`, { responseType: 'json' }
    ).toPromise();
  }

  public getSongs(): Promise<Array<SongViewModel>> {
    return this.httpClient.get<Array<SongViewModel>>(
      `${environment.api}/songs`, { responseType: 'json' }
    ).toPromise();
  }

  public getFilters(): Promise<Array<any>> {
    return this.httpClient.get<Array<any>>(
      `${environment.api}/filters`, { responseType: 'json' }
    ).toPromise();
  }

  public importPlaylist(model: ImportPlaylistViewModel): Promise<any> {
    return this.httpClient.post(
      `${environment.api}/playlists/import`, model, { headers: this.jsonHeaders }
    ).toPromise();
  }
}
