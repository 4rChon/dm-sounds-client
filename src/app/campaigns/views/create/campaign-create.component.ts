import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CampaignActionsService } from '@app-campaigns/campaign-actions/campaign-actions.service';
import { CampaignCreateFormViewModel } from '@app-campaigns/view-models';
import { CampaignAPIService } from '@app-common/api-services/campaign-api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-campaign-create',
  templateUrl: 'campaign-create.component.html',
  styleUrls: ['../../../common/forms/forms.less']
})

export class CampaignCreateComponent implements OnInit {
  public campaignForm!: FormGroup;

  public submitting = false;
  public error = '';
  public success = '';

  get name(): AbstractControl | null {
    return this.campaignForm.get('name');
  }
  get playlists(): AbstractControl | null {
    return this.campaignForm.get('playlists');
  }
  get songs(): AbstractControl | null {
    return this.campaignForm.get('songs');
  }
  constructor(
    private readonly campaignActionsService: CampaignActionsService,
    private readonly campaignAPIService: CampaignAPIService
  ) { }

  ngOnInit(): void {
    this.campaignForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      playlists: new FormControl([]),
      songs: new FormControl([]),
    });
  }

  public onSubmit(): void {
    this.submitting = true;

    const model: CampaignCreateFormViewModel = {
      name: this.name?.value,
      playlists: this.playlists?.value,
      songs: this.songs?.value
    };

    this.campaignAPIService.createCampaign(model)
      .pipe(finalize(() => this.submitting = false))
      .subscribe({
        next: response => {
          this.campaignForm.setErrors(null);
          this.success = response.message;
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
        }
      });
  }
}
