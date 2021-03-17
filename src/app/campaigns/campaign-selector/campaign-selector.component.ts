import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import CampaignNameViewModel from '../campaign-name.view-model';
import { CampaignService } from '../campaign.service';
import CampaignViewModel from '../campaign.view-model';

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

  constructor(private readonly campaignService: CampaignService) {
    this.campaignService.getCampaignNames().then((campaigns) => {
      this.campaignNames = campaigns;
      console.log(this.campaignNames);
      if (this.campaignNames.length > 0) {
        this.selectedValue = this.campaignNames[0].id;
      }
    });
  }

  public selectCampaign(event: any): void {
    this.campaignLoading.emit(true);
    this.campaignService.getCampaign(event.value).then(
      campaign => {
        this.campaignLoading.emit(false);
        this.campaignSelected.emit(campaign);
      });
  }
}
