import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CampaignAPIService } from '@app-api-services/campaign-api.service';
import { PlaylistAPIService } from '@app-api-services/playlist-api.service';
import { SongAPIService } from '@app-api-services/song-api.service';
import { CampaignActionsService } from '@app-campaigns/campaign-actions/campaign-actions.service';
import { CampaignCreateFormViewModel } from '@app-campaigns/view-models';
import { DroplistItemType } from '@app-droplists/droplist-item-type.enum';
import { DroplistItem } from '@app-droplists/droplist-item.interface';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-campaign-create-form',
  templateUrl: 'campaign-create-form.component.html',
  styleUrls: ['../../../common/forms/forms.less']
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
    private readonly campaignActionsService: CampaignActionsService,
    private readonly campaignAPIService: CampaignAPIService,
    private readonly playlistAPIService: PlaylistAPIService,
    private readonly songAPIService: SongAPIService,
  ) {
    this.playlistAPIService.getPlaylists().subscribe({
      next: playlists => {
        this.availablePlaylists = playlists.map(data => ({ type: DroplistItemType.Playlist, data }));
        this.fetchingPlaylists = false;
      }
    });

    this.songAPIService.getSongs().subscribe({
      next: songs => {
        this.availableSongs = songs.map(data => ({ type: DroplistItemType.Song, data }));
        this.fetchingSongs = false;
      }
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

    const model: CampaignCreateFormViewModel = {
      name: this.name?.value,
      playlists: this.playlists?.value.map((item: DroplistItem) => item.data._id),
      songs: this.songs?.value.map((item: DroplistItem) => item.data._id)
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
