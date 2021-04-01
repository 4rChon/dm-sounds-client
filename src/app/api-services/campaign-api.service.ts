import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CampaignViewModel, CampaignNameViewModel } from '../campaigns';
import { CampaignCreateFormModel } from '../campaigns/forms/create/campaign-create-form.model';
import { CampaignEditFormModel } from '../campaigns/forms/edit/campaign-edit-form.model';
import { Observable } from 'rxjs';
import { ApiConstants } from './api.constants';

@Injectable({ providedIn: 'root' })
export class CampaignAPIService {
  private apiUrl = `${environment.api}/campaigns`;

  constructor(private httpClient: HttpClient) { }

  public getCampaign(id: string): Observable<CampaignViewModel> {
    return this.httpClient.get<CampaignViewModel>(
      `${this.apiUrl}/get-single/${id}`, { responseType: 'json' }
    );
  }

  public getCampaigns(): Observable<Array<CampaignViewModel>> {
    return this.httpClient.get<Array<CampaignViewModel>>(
      `${this.apiUrl}`, { responseType: 'json' }
    );
  }

  public getCampaignNames(): Observable<Array<CampaignNameViewModel>> {
    return this.httpClient.get<Array<CampaignNameViewModel>>(
      `${this.apiUrl}/get-names`, { responseType: 'json' }
    );
  }

  public createCampaign(model: CampaignCreateFormModel): Observable<any> {
    return this.httpClient.post<any>(
      `${this.apiUrl}`, model, { headers: ApiConstants.jsonHeaders }
    );
  }

  public editCampaign(model: CampaignEditFormModel): Observable<any> {
    return this.httpClient.put<any>(
      `${this.apiUrl}`, model, { headers: ApiConstants.jsonHeaders }
    );
  }

  public removeCampaign(id: string): Observable<any> {
    return this.httpClient.delete<any>(
      `${this.apiUrl}/${id}`, { responseType: 'json' }
    );
  }
}
