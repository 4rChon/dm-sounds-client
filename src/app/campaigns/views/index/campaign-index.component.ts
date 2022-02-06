import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CampaignViewModel } from '@app-campaigns/view-models';
import { CampaignAPIService } from '@app-common/api-services/campaign-api.service';
import { CampaignDeleteComponent } from '../delete/campaign-delete.component';

@Component({
  selector: 'app-campaign-index',
  templateUrl: 'campaign-index.component.html'
})

export class CampaignIndexComponent implements OnInit {
  public campaigns: Array<CampaignViewModel> = [];

  constructor(
    private readonly campaignApiService: CampaignAPIService,
    private readonly router: Router,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit() {
    const subscription = this.campaignApiService.getCampaigns().subscribe(
      campaigns => {
        this.campaigns = campaigns;

        subscription.unsubscribe();
      }
    );
  }

  public openEditView(id: string): void {
    this.router.navigate(['campaigns', 'edit', id]);
  }

  public openDeleteDialog(id: string): void {
    this.dialog.open(CampaignDeleteComponent, { data: id });
  }
}
