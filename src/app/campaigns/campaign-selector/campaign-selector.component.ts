import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CampaignAPIService } from '@app-api-services/campaign-api.service';
import { CampaignActionsService } from '@app-campaigns/campaign-actions/campaign-actions.service';
import { CampaignNameViewModel, CampaignViewModel } from '@app-campaigns/view-models';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-campaign-selector',
  templateUrl: './campaign-selector.component.html',
  styleUrls: ['./campaign-selector.component.less']
})
export class CampaignSelectorComponent implements OnDestroy {
  public campaignNames: Array<CampaignNameViewModel> = [];
  public campaignControl = new FormControl('');

  private campaignUpdateSubscription: Subscription;

  @Output() campaignSelected = new EventEmitter<CampaignViewModel>();
  @Output() campaignLoading = new EventEmitter<boolean>();

  constructor(
    private readonly campaignActionsService: CampaignActionsService,
    private readonly campaignAPIService: CampaignAPIService
  ) {
    this.campaignUpdateSubscription = this.campaignActionsService.campaignsUpdated$.subscribe({
      next: () => {
        this.campaignAPIService.getCampaignNames().subscribe({
          next: (campaigns) => {
            console.log(campaigns);
            this.campaignNames = campaigns;
          }
        });

        if (this.campaignControl.value) {
          this.selectCampaign(this.campaignControl);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.campaignUpdateSubscription?.unsubscribe();
  }

  public selectCampaign(event: any): void {
    this.campaignLoading.emit(true);
    this.campaignAPIService.getCampaign(event.value)
      .pipe(finalize(() => this.campaignLoading.emit(false)))
      .subscribe({
        next: campaign => {
          this.campaignSelected.emit(campaign);
        },
        error: () => {
          this.campaignSelected.emit();
        }
      });
  }
}
