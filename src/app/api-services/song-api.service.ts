import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SongViewModel } from '../songs/song.view-model';

@Injectable({ providedIn: 'root' })
export class SongAPIService {
  constructor(private httpClient: HttpClient) { }

  public getSongs(): Observable<Array<SongViewModel>> {
    return this.httpClient.get<Array<SongViewModel>>(
      `${environment.api}/songs`, { responseType: 'json' }
    );
  }
}
