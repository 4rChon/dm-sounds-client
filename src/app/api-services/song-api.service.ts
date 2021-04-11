import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SongImportViewModel } from '../songs/view-models/song-import-view-model';
import { SongViewModel } from '../songs/view-models/song.view-model';
import { ApiConstants } from './api.constants';

@Injectable({ providedIn: 'root' })
export class SongAPIService {
  private readonly apiUrl = `${environment.api}/songs`;

  constructor(private httpClient: HttpClient) { }

  public getSongs(): Observable<Array<SongViewModel>> {
    return this.httpClient.get<Array<SongViewModel>>(
      this.apiUrl, { responseType: 'json' }
    );
  }

  public importSong(model: SongImportViewModel): Observable<any> {
    return this.httpClient.post<SongImportViewModel>(
      this.apiUrl, model, { headers: ApiConstants.jsonHeaders }
    );
  }
}
