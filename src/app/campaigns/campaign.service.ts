import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CampaignViewModel } from './view-models/campaign.view-model';

@Injectable({ providedIn: 'root' })
export class CampaignService {
  // private campaignSelectedSubject = new Subject<CampaignViewModel>();
  // public campaignSelected$ = this.campaignSelectedSubject.asObservable();
}
