import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CampaignViewModel } from '@app-campaigns/view-models';
import { CampaignDeleteComponent } from '@app-campaigns/views/delete/campaign-delete.component';
import { CampaignEditComponent } from '@app-campaigns/views/edit/campaign-edit.component';
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
    this.dialog.open(CampaignEditComponent, { data: this.currentCampaign });
  }

  public openDeleteDialog(): void {
    this.dialog.open(CampaignDeleteComponent, { data: this.currentCampaign?._id });
  }
}
