import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CampaignAPIService } from 'src/app/api-services/campaign-api.service';
import { CampaignNameViewModel, CampaignViewModel } from '..';
import { CampaignActionsService } from '../campaign-actions/campaign-actions.service';

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
          this.campaignLoading.emit(false);
        }
      });
  }
}
