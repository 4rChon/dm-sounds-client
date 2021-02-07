import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class YTDLService {
  constructor(private readonly httpClient: HttpClient) {}

  public getAudioStream(url: string): Observable<ArrayBuffer> {
    return this.httpClient.get(`${environment.api}/stream/${url}`, {
      responseType: 'arraybuffer',
    });
  }
}
