import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CampaignDeleteFormComponent } from '@app-campaigns/forms/delete/campaign-delete-form.component';
import { CampaignEditFormComponent } from '@app-campaigns/forms/edit/campaign-edit-form.component';
import { CampaignViewModel } from '@app-campaigns/view-models';
import { TooltipConstants } from '@app-common/tooltip.constants';
import { DroplistService } from '@app-droplists/droplist.service';

@Component({
  selector: 'app-campaign-actions',
  templateUrl: 'campaign-actions.component.html'
})

export class CampaignActionsComponent {
  public editCampaignTooltip = TooltipConstants.EditCampaign;
  public deleteCampaignTooltip = TooltipConstants.DeleteCampaign;
  public currentCampaign?: CampaignViewModel;
  @Output() fetching = new EventEmitter<boolean>();

  constructor(
    private readonly dialog: MatDialog,
    private readonly droplistService: DroplistService
  ) { }

  public selectCampaign(campaign: CampaignViewModel): void {
    this.currentCampaign = campaign;
    this.droplistService.switchCampaign(this.currentCampaign);
  }

  public openEditDialog(): void {
    this.dialog.open(CampaignEditFormComponent, { data: this.currentCampaign });
  }

  public openDeleteDialog(): void {
    this.dialog.open(CampaignDeleteFormComponent, { data: this.currentCampaign?._id });
  }
}
