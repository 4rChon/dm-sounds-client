import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PlaylistFormModel } from './models/playlist-form.model';
import { PlaylistModel } from './models/playlist.model';

@Injectable({ providedIn: 'root' })
export class APIService {

  private jsonHeaders = new HttpHeaders({ 'content-type': 'application/json' });

  constructor(private readonly httpClient: HttpClient) { }

  public addPlaylist(model: PlaylistFormModel): Promise<any> {
    return this.httpClient.post(
      `${environment.api}/playlists/`, model, { headers: this.jsonHeaders }
    ).toPromise();
  }

  public getAudioStreamUrl(id: string): string {
    return `${environment.api}/streams/${id}`;
  }

  public getPlaylists(): Promise<Array<PlaylistModel>> {
    return this.httpClient.get<Array<PlaylistModel>>(
      `${environment.api}/playlists/`, { responseType: 'json' }
    ).toPromise();
  }
}
