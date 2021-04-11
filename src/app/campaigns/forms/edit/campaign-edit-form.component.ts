import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { CampaignAPIService } from 'src/app/api-services/campaign-api.service';
import { PlaylistAPIService } from 'src/app/api-services/playlist-api.service';
import { SongAPIService } from 'src/app/api-services/song-api.service';
import { DroplistItemType } from 'src/app/droplists/droplist-item-type.enum';
import { DroplistItem } from 'src/app/droplists/droplist-item.interface';
import { CampaignActionsService } from '../../campaign-actions/campaign-actions.service';
import { CampaignViewModel } from '../../view-models/campaign.view-model';
import { CampaignEditFormViewModel } from '../../view-models/campaign-edit-form.view-model';

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
    private readonly campaignActionsService: CampaignActionsService,
    private readonly campaignAPIService: CampaignAPIService,
    private readonly playlistAPIService: PlaylistAPIService,
    private readonly songAPIService: SongAPIService,
    @Inject(MAT_DIALOG_DATA) public campaign: CampaignViewModel
  ) {
    this.playlistAPIService.getPlaylists().subscribe({
      next: playlists => {
        const filteredPlaylists = playlists.filter(data => !this.campaign.playlists?.find((value) => value._id === data._id));
        this.availablePlaylists = filteredPlaylists.map(data => ({ type: DroplistItemType.Playlist, data }));
        this.fetchingPlaylists = false;
      }
    });

    this.songAPIService.getSongs().subscribe({
      next: songs => {
        const filteredSongs = songs.filter(data => !this.campaign.songs?.find((value) => value._id === data._id));
        this.availableSongs = filteredSongs.map(data => ({ type: DroplistItemType.Song, data }));
        this.fetchingSongs = false;
      }
    });
  }

  ngOnInit(): void {
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

    const model: CampaignEditFormViewModel = {
      _id: this.campaign._id,
      name: this.name?.value,
      playlists: this.playlists?.value.map((item: DroplistItem) => item.data._id),
      songs: this.songs?.value.map((item: DroplistItem) => item.data._id)
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
