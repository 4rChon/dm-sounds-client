import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CampaignEditFormViewModel, CampaignViewModel } from '@app-campaigns/view-models';
import { finalize } from 'rxjs/operators';
import { CampaignAPIService } from 'src/app/api-services/campaign-api.service';
import { PlaylistAPIService } from 'src/app/api-services/playlist-api.service';
import { DroplistItemType } from 'src/app/droplists/droplist-item-type.enum';
import { DroplistItem } from 'src/app/droplists/droplist-item.interface';
import { CampaignActionsService } from '../../campaign-actions/campaign-actions.service';

@Component({
  selector: 'app-campaign-edit-form',
  templateUrl: 'campaign-edit-form.component.html',
  styleUrls: ['../../../common/forms/forms.less']
})

export class CampaignEditFormComponent implements OnInit {
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
    private readonly campaignAPIService: CampaignAPIService,
    @Inject(MAT_DIALOG_DATA) public campaign: CampaignViewModel
  ) { }

  ngOnInit(): void {
    this.campaignForm = new FormGroup({
      name: new FormControl(this.campaign.name, [Validators.required]),
      playlists: new FormControl(this.campaign.playlists),
      songs: new FormControl(this.campaign.songs),
    });
  }

  public onSubmit(): void {
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
        },
      });
  }
}
