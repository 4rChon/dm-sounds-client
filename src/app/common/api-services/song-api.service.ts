import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SongImportViewModel, SongViewModel } from '@app-songs/view-models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  public getSong(id: string): Observable<SongViewModel> {
    return this.httpClient.get<SongViewModel>(
      `${this.apiUrl}/${id}`, { responseType: 'json' }
    )
  }

  public importSong(model: SongImportViewModel): Observable<any> {
    return this.httpClient.post<SongImportViewModel>(
      `${this.apiUrl}/import`, model, { headers: ApiConstants.jsonHeaders }
    );
  }

  public editSong(model: SongViewModel): Observable<any> {
    return this.httpClient.put<SongViewModel>(
      this.apiUrl, model, { headers: ApiConstants.jsonHeaders }
    );
  }

  public removeSong(id: string): Observable<any> {
    return this.httpClient.delete<SongViewModel>(
      `${this.apiUrl}/${id}`, { responseType: 'json' }
    );
  }
}
