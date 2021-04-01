import { Component, Inject, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APIService } from 'src/app/api-services/api.service';
import { CampaignAPIService } from 'src/app/api-services/campaign-api.service';
import { DroplistItemType } from 'src/app/droplists/droplist-item-type.enum';
import { DroplistItem } from 'src/app/droplists/droplist-item.interface';
import { CampaignViewModel } from '../../campaign.view-model';
import { CampaignEditFormModel } from './campaign-edit-form.model';

@Component({
  selector: 'app-campaign-edit-form',
  templateUrl: 'campaign-edit-form.component.html',
  styleUrls: ['campaign-edit-form.component.less']
})

export class CampaignEditFormComponent implements OnInit {
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
    private readonly campaignAPIService: CampaignAPIService,
    @Inject(MAT_DIALOG_DATA) public campaign: CampaignViewModel
  ) {
    this.apiService.getPlaylists().then(playlists => {
      const filteredPlaylists = playlists.filter(data => !this.campaign.playlists?.find((value) => value.id === data.id));
      this.availablePlaylists = filteredPlaylists.map(data => ({ type: DroplistItemType.Playlist, data }));
      this.fetchingPlaylists = false;
    });

    this.apiService.getSongs().then(songs => {
      const filteredSongs = songs.filter(data => !this.campaign.songs?.find((value) => value.id === data.id));
      this.availableSongs = filteredSongs.map(data => ({ type: DroplistItemType.Song, data }));
      this.fetchingSongs = false;
    });
  }

  ngOnInit(): void {
    console.log(this.campaign.playlists
      ?.map(data => ({ type: DroplistItemType.Playlist, data })));

    this.campaignForm = new FormGroup({
      name: new FormControl(this.campaign.name, [Validators.required]),
      playlists: new FormControl(this.campaign.playlists
        ?.map(data => ({ type: DroplistItemType.Playlist, data }))),
      songs: new FormControl(this.campaign.songs
        ?.map(data => ({ type: DroplistItemType.Song, data }))),
    });
  }

  public onSubmit(): void {
    this.submitting = true;

    const model: CampaignEditFormModel = {
      id: this.campaign.id,
      name: this.name?.value,
      playlists: this.playlists?.value.map((item: DroplistItem) => item.data.id),
      songs: this.songs?.value.map((item: DroplistItem) => item.data.id)
    };

    this.campaignAPIService.editCampaign(model)
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
