import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CampaignNameViewModel } from '@app-campaigns/campaign-name.view-model';
import { CampaignCreateFormViewModel, CampaignEditFormViewModel, CampaignViewModel } from '@app-campaigns/view-models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiConstants } from './api.constants';

@Injectable({ providedIn: 'root' })
export class CampaignAPIService {
  private readonly apiUrl = `${environment.api}/campaigns`;

  constructor(private httpClient: HttpClient) { }

  public getCampaign(id: string): Observable<CampaignViewModel> {
    return this.httpClient.get<CampaignViewModel>(
      `${this.apiUrl}/get-single/${id}`, { responseType: 'json' }
    );
  }

  public getCampaigns(): Observable<Array<CampaignViewModel>> {
    return this.httpClient.get<Array<CampaignViewModel>>(
      this.apiUrl, { responseType: 'json' }
    );
  }

  public getCampaignNames(): Observable<Array<CampaignNameViewModel>> {
    return this.httpClient.get<Array<CampaignNameViewModel>>(
      `${this.apiUrl}/get-names`, { responseType: 'json' }
    );
  }

  public createCampaign(model: CampaignCreateFormViewModel): Observable<any> {
    return this.httpClient.post<any>(
      this.apiUrl, model, { headers: ApiConstants.jsonHeaders }
    );
  }

  public editCampaign(model: CampaignEditFormViewModel): Observable<any> {
    return this.httpClient.put<any>(
      this.apiUrl, model, { headers: ApiConstants.jsonHeaders }
    );
  }

  public removeCampaign(id: string): Observable<any> {
    return this.httpClient.delete<any>(
      `${this.apiUrl}/${id}`, { responseType: 'json' }
    );
  }
}
