import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FilterViewModel } from '../filters/filter.view-model';
import { ApiConstants } from './api.constants';
import { FilterEditFormModel } from '../filters/forms/edit/filter-edit-form.model';
import { FilterCreateFormModel } from '../filters/forms/create/filter-create-form.model';

@Injectable({ providedIn: 'root' })
export class FilterAPIService {
  private apiUrl = `${environment.api}/filters`;

  constructor(private httpClient: HttpClient) { }

  public getFilters(): Observable<Array<FilterViewModel>> {
    return this.httpClient.get<Array<FilterViewModel>>(
      this.apiUrl, { responseType: 'json' }
    );
  }

  public editFilter(model: FilterEditFormModel): Observable<any> {
    return this.httpClient.put<any>(
      this.apiUrl, model, { responseType: 'json' }
    );
  }

  public deleteFilter(id: string): Observable<any> {
    return this.httpClient.delete<any>(
      `${this.apiUrl}/${id}`, { responseType: 'json' }
    );
  }

  public addFilter(model: FilterCreateFormModel): Observable<any> {
    return this.httpClient.post<any>(
      this.apiUrl, model, { headers: ApiConstants.jsonHeaders }
    );
  }
}
