import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import CampaignNameViewModel from './campaign-name.view-model';
import CampaignViewModel from './campaign.view-model';


@Injectable({ providedIn: 'root' })
export class CampaignService {
  constructor(private readonly apiService: APIService) { }

  public async getCampaignNames(): Promise<Array<CampaignNameViewModel>> {
    return this.apiService.getCampaignNames();
  }

  public async getCampaigns(): Promise<Array<any>> {
    return this.apiService.getCampaigns();
  }

  public async getCampaign(id: string): Promise<CampaignViewModel> {
    return this.apiService.getCampaign(id);
  }
}
