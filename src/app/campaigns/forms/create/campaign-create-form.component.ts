import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/api-services/api.service';
import { CampaignAPIService } from 'src/app/api-services/campaign-api.service';
import { DroplistItem, DroplistItemType } from 'src/app/droplists';
import { CampaignCreateFormModel } from './campaign-create-form.model';

@Component({
  selector: 'app-campaign-create-form',
  templateUrl: 'campaign-create-form.component.html',
  styleUrls: ['campaign-create-form.component.less']
})

export class CampaignCreateFormComponent implements OnInit {
  public availablePlaylists: Array<DroplistItem> = [];
  public availableSongs: Array<DroplistItem> = [];

  public fetchingPlaylists = true;
  public fetchingSongs = true;
  public error = '';
  public success = '';

  public campaignForm!: FormGroup;
  public submitting = false;

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
    private readonly apiService: APIService,
    private readonly campaignAPIService: CampaignAPIService
  ) {
    this.apiService.getPlaylists().then(playlists => {
      this.availablePlaylists = playlists.map(data => ({ type: DroplistItemType.Playlist, data }));
      this.fetchingPlaylists = false;
    });

    this.apiService.getSongs().then(songs => {
      this.availableSongs = songs.map(data => ({ type: DroplistItemType.Song, data }));
      this.fetchingSongs = false;
    });
  }

  ngOnInit(): void {
    this.campaignForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      playlists: new FormControl([]),
      songs: new FormControl([]),
    });
  }

  public onSubmit(): void {
    this.submitting = true;

    const model: CampaignCreateFormModel = {
      name: this.name?.value,
      playlists: this.playlists?.value.map((item: DroplistItem) => item.data.id),
      songs: this.songs?.value.map((item: DroplistItem) => item.data.id)
    };

    this.campaignAPIService.createCampaign(model)
      .then(response => {
        this.campaignForm.setErrors(null);
        this.success = response.message;
        const sub = this.campaignForm.valueChanges.subscribe(() => {
          this.success = '';
          sub.unsubscribe();
        });
      })
      .catch(reason => {
        this.campaignForm.setErrors({ error: true });
        this.error = reason.error.message;
        const sub = this.campaignForm.valueChanges.subscribe(() => {
          this.error = '';
          this.campaignForm.setErrors(null);
          sub.unsubscribe();
        });
      }).finally(() => {
        this.submitting = false;
      });
  }
}
