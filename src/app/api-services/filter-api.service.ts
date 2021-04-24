import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilterCreateFormViewModel, FilterEditFormViewModel, FilterViewModel } from '../filters/view-models';
import { ApiConstants } from './api.constants';

@Injectable({ providedIn: 'root' })
export class FilterAPIService {
  private readonly apiUrl = `${environment.api}/filters`;

  constructor(private httpClient: HttpClient) { }

  public getFilters(): Observable<Array<FilterViewModel>> {
    return this.httpClient.get<Array<FilterViewModel>>(
      this.apiUrl, { responseType: 'json' }
    );
  }

  public editFilter(model: FilterEditFormViewModel): Observable<any> {
    return this.httpClient.put<any>(
      this.apiUrl, model, { responseType: 'json' }
    );
  }

  public deleteFilter(id: string): Observable<any> {
    return this.httpClient.delete<any>(
      `${this.apiUrl}/${id}`, { responseType: 'json' }
    );
  }

  public addFilter(model: FilterCreateFormViewModel): Observable<any> {
    return this.httpClient.post<any>(
      this.apiUrl, model, { headers: ApiConstants.jsonHeaders }
    );
  }
}
