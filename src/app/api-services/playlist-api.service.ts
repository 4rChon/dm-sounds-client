import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImportPlaylistViewModel } from '../playlists/playlist-forms/import/import-playlist-view-model';
import { PlaylistViewModel } from '../playlists/playlist.view-model';
import { ApiConstants } from './api.constants';

@Injectable({ providedIn: 'root' })
export class PlaylistAPIService {
  constructor(private httpClient: HttpClient) { }

  public getPlaylists(): Observable<Array<PlaylistViewModel>> {
    return this.httpClient.get<Array<PlaylistViewModel>>(
      `${environment.api}/playlists/`, { responseType: 'json' }
    );
  }

  public importPlaylist(model: ImportPlaylistViewModel): Observable<any> {
    return this.httpClient.post(
      `${environment.api}/playlists/import`, model, { headers: ApiConstants.jsonHeaders }
    );
  }
}
