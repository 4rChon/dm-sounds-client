import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CampaignEditFormViewModel, CampaignViewModel } from '@app-campaigns/view-models';
import { CampaignAPIService } from '@app-common/api-services/campaign-api.service';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CampaignActionsService } from '../../campaign-actions/campaign-actions.service';

@Component({
  selector: 'app-campaign-edit',
  templateUrl: 'campaign-edit.component.html',
  styleUrls: ['../../../common/forms/forms.less']
})

export class CampaignEditComponent implements OnInit, OnDestroy {
  public campaign?: CampaignViewModel;
  public campaignForm!: FormGroup;
  public submitting = false;
  public error = '';
  public success = '';

  private subscriptions: Array<Subscription> = [];

  constructor(
    private readonly campaignActionsService: CampaignActionsService,
    private readonly campaignAPIService: CampaignAPIService,
    private readonly route: ActivatedRoute
  ) { }

  get name(): AbstractControl | null {
    return this.campaignForm.get('name');
  }
  get playlists(): AbstractControl | null {
    return this.campaignForm.get('playlists');
  }
  get songs(): AbstractControl | null {
    return this.campaignForm.get('songs');
  }

  ngOnInit(): void {
    const routeSubscription = this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (!id) {
        return;
      }

      const campaignSubscription = this.campaignAPIService.getCampaign(id).subscribe(campaign => {
        this.campaign = campaign;

        this.campaignForm = new FormGroup({
          name: new FormControl(this.campaign.name, [Validators.required]),
          playlists: new FormControl(this.campaign.playlists),
          songs: new FormControl(this.campaign.songs),
        });
      });

      this.subscriptions.push(campaignSubscription);
    });

    this.subscriptions.push(routeSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(value => value.unsubscribe());
  }

  public onSubmit(): void {
    if (!this.campaign) {
      return;
    }

    this.submitting = true;

    const model: CampaignEditFormViewModel = {
      _id: this.campaign._id,
      name: this.name?.value,
      playlists: this.playlists?.value,
      songs: this.songs?.value
    };

    this.campaignAPIService.editCampaign(model)
      .pipe(finalize(() => this.submitting = false))
      .subscribe({
        next: () => {
          this.campaignForm.setErrors(null);
          this.success = 'Campaign updated!';
          const sub = this.campaignForm.valueChanges.subscribe(() => {
            this.success = '';
            sub.unsubscribe();
          });

          this.campaignActionsService.updateCampaigns();
        },
        error: reason => {
          this.campaignForm.setErrors({ error: true });
          this.error = reason.error.message;
          const sub = this.campaignForm.valueChanges.subscribe(() => {
            this.error = '';
            this.campaignForm.setErrors(null);
            sub.unsubscribe();
          });
        },
      });
  }
}
