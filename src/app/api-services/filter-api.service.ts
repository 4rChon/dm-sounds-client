import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilterAPIService {
  constructor(private httpClient: HttpClient) { }

  public getFilters(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(
      `${environment.api}/filters`, { responseType: 'json' }
    );
  }
}
