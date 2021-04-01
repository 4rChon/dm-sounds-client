import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CampaignActionsService {
  private campaignsUpdatedSubject = new BehaviorSubject<boolean>(true);
  public campaignsUpdated$ = this.campaignsUpdatedSubject.asObservable();

  public updateCampaigns(): void {
    this.campaignsUpdatedSubject.next(true);
  }
}
