import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CampaignAPIService } from 'src/app/api-services/campaign-api.service';
import { CampaignNameViewModel, CampaignViewModel } from '..';

@Component({
  selector: 'app-campaign-selector',
  templateUrl: './campaign-selector.component.html',
  styleUrls: ['./campaign-selector.component.less']
})
export class CampaignSelectorComponent {
  public campaignNames: Array<CampaignNameViewModel> = [];
  public selectedValue = '';
  public campaignControl = new FormControl('');
  @Output() campaignSelected = new EventEmitter<CampaignViewModel>();
  @Output() campaignLoading = new EventEmitter<boolean>();

  constructor(private readonly campaignAPIService: CampaignAPIService) {
    this.campaignAPIService.getCampaignNames().subscribe({
      next: (campaigns) => {
        this.campaignNames = campaigns;
        if (this.campaignNames.length > 0) {
          this.selectedValue = this.campaignNames[0].id;
        }
      }
    });
  }

  public selectCampaign(event: any): void {
    this.campaignLoading.emit(true);
    this.campaignAPIService.getCampaign(event.value).subscribe({
      next: campaign => {
        this.campaignLoading.emit(false);
        this.campaignSelected.emit(campaign);
      }
    });
  }
}
