import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlaylistImportViewModel } from '../playlists/view-models/playlist-import-view-model';
import { PlaylistViewModel } from '../playlists/view-models/playlist.view-model';
import { ApiConstants } from './api.constants';

@Injectable({ providedIn: 'root' })
export class PlaylistAPIService {
  private readonly apiUrl = `${environment.api}/playlists`;

  constructor(private httpClient: HttpClient) { }

  public getPlaylists(): Observable<Array<PlaylistViewModel>> {
    return this.httpClient.get<Array<PlaylistViewModel>>(
      this.apiUrl, { responseType: 'json' }
    );
  }

  public importPlaylist(model: PlaylistImportViewModel): Observable<any> {
    return this.httpClient.post(
      `${this.apiUrl}/import`, model, { headers: ApiConstants.jsonHeaders }
    );
  }
}
