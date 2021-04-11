import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FilterViewModel } from '../filters/view-models/filter.view-model';
import { ApiConstants } from './api.constants';
import { FilterEditFormViewModel } from '../filters/view-models/filter-edit-form.view-model';
import { FilterCreateFormViewModel } from '../filters/view-models/filter-create-form.view-model';

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
