import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CampaignViewModel, CampaignNameViewModel } from '../campaigns';
import { CampaignCreateFormModel } from '../campaigns/forms/create/campaign-create-form.model';
import { CampaignEditFormModel } from '../campaigns/forms/edit/campaign-edit-form.model';

@Injectable({ providedIn: 'root' })
export class CampaignAPIService {
  private apiUrl = `${environment.api}/campaigns`;
  private jsonHeaders = new HttpHeaders({ 'content-type': 'application/json' });

  constructor(private httpClient: HttpClient) { }

  public getCampaign(id: string): Promise<CampaignViewModel> {
    return this.httpClient.get<CampaignViewModel>(
      `${this.apiUrl}/get-single/${id}`, { responseType: 'json' }
    ).toPromise();
  }

  public getCampaigns(): Promise<Array<CampaignViewModel>> {
    return this.httpClient.get<Array<CampaignViewModel>>(
      `${this.apiUrl}`, { responseType: 'json' }
    ).toPromise();
  }

  public getCampaignNames(): Promise<Array<CampaignNameViewModel>> {
    return this.httpClient.get<Array<CampaignNameViewModel>>(
      `${this.apiUrl}/get-names`, { responseType: 'json' }
    ).toPromise();
  }

  public createCampaign(model: CampaignCreateFormModel): Promise<any> {
    return this.httpClient.post<any>(
      `${this.apiUrl}`, model, { headers: this.jsonHeaders }
    ).toPromise();
  }

  public editCampaign(model: CampaignEditFormModel): Promise<any> {
    return this.httpClient.put<any>(
      `${this.apiUrl}`, model, { headers: this.jsonHeaders }
    ).toPromise();
  }
}
