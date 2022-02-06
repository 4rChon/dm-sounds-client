import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  PlaylistCreateViewModel,
  PlaylistEditViewModel,
  PlaylistImportViewModel,
  PlaylistViewModel
} from '@app-playlists/view-models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  public getPlaylist(id: string): Observable<PlaylistViewModel> {
    return this.httpClient.get<PlaylistViewModel>(
      `${this.apiUrl}/${id}`, { responseType: 'json' }
    )
  }

  public importPlaylist(model: PlaylistImportViewModel): Observable<any> {
    return this.httpClient.post(
      `${this.apiUrl}/import`, model, { headers: ApiConstants.jsonHeaders }
    );
  }

  public createPlaylist(model: PlaylistCreateViewModel): Observable<any> {
    return this.httpClient.post(
      `${this.apiUrl}/create`, model, { headers: ApiConstants.jsonHeaders }
    );
  }

  public editPlaylist(model: PlaylistEditViewModel): Observable<any> {
    return this.httpClient.put(
      this.apiUrl, model, { headers: ApiConstants.jsonHeaders }
    );
  }

  public removePlaylist(id: string): Observable<any> {
    return this.httpClient.delete(
      `${this.apiUrl}/${id}`, { responseType: 'json' }
    );
  }
}
