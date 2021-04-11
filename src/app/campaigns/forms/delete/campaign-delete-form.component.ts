import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { CampaignAPIService } from 'src/app/api-services/campaign-api.service';
import { CampaignActionsService } from '../../campaign-actions/campaign-actions.service';

@Component({
  selector: 'app-campaign-delete-form',
  templateUrl: 'campaign-delete-form.component.html',
  styleUrls: ['../../../common/forms/forms.less', 'campaign-delete-form.component.less']
})

export class CampaignDeleteFormComponent {
  public error = '';
  public success = '';
  public deleting = false;

  constructor(
    private readonly campaignActionsService: CampaignActionsService,
    private readonly campaignAPIService: CampaignAPIService,
    @Inject(MAT_DIALOG_DATA) public id: string) { }

  public onSubmit(): void {
    this.deleting = true;
    this.campaignAPIService.removeCampaign(this.id)
      .pipe(finalize(() => this.deleting = false))
      .subscribe({
        next: response => {
          this.success = response.message;
          this.campaignActionsService.updateCampaigns();
        },
        error: reason => {
          this.error = reason.error.message;
        }
      });
  }
}
