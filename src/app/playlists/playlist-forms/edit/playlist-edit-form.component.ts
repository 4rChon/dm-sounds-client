import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SongAPIService } from '@app-api-services/song-api.service';
import { DroplistItemType } from '@app-droplists/droplist-item-type.enum';
import { DroplistItem } from '@app-droplists/droplist-item.interface';
import { PlaylistEditViewModel, PlaylistViewModel } from '@app-playlists/view-models';
import { finalize } from 'rxjs/operators';
import { PlaylistAPIService } from 'src/app/api-services/playlist-api.service';

@Component({
  selector: 'app-playlist-edit-form',
  templateUrl: 'playlist-edit-form.component.html',
  styleUrls: ['../../../common/forms/forms.less']
})

export class PlaylistEditFormComponent implements OnInit {
  public error = '';
  public success = '';

  public playlistForm!: FormGroup;
  public submitting = false;

  get name(): AbstractControl | null {
    return this.playlistForm.get('name');
  }
  get filters(): AbstractControl | null {
    return this.playlistForm.get('filters');
  }
  get songs(): AbstractControl | null {
    return this.playlistForm.get('songs');
  }
  get colour(): AbstractControl | null {
    return this.playlistForm.get('colour');
  }
  get loop(): AbstractControl | null {
    return this.playlistForm.get('loop');
  }
  get shuffle(): AbstractControl | null {
    return this.playlistForm.get('shuffle');
  }
  get replaceAll(): AbstractControl | null {
    return this.playlistForm.get('replaceAll');
  }

  constructor(
    private readonly playlistAPIService: PlaylistAPIService,
    @Inject(MAT_DIALOG_DATA) public playlist: PlaylistViewModel
  ) { }

  ngOnInit(): void {
    this.playlistForm = new FormGroup({
      name: new FormControl(this.playlist.name, [Validators.required]),
      filters: new FormControl(this.playlist.filters),
      songs: new FormControl(this.playlist.songs),
      colour: new FormControl(this.playlist.colour),
      loop: new FormControl(this.playlist.loop),
      shuffle: new FormControl(this.playlist.shuffle),
      replaceAll: new FormControl(this.playlist.replaceAll)
    });
  }

  public async onSubmit(): Promise<void> {
    this.submitting = true;

    const model: PlaylistEditViewModel = {
      _id: this.playlist._id,
      name: this.name?.value,
      filters: this.filters?.value,
      songs: this.songs?.value.map((item: DroplistItem) => item.data._id),
      colour: this.colour?.value,
      loop: this.loop?.value,
      shuffle: this.shuffle?.value,
      replaceAll: this.replaceAll?.value
    };

    this.playlistAPIService.editPlaylist(model)
      .pipe(finalize(() => this.submitting = false))
      .subscribe({
        next: response => {
          this.playlistForm.setErrors(null);
          this.success = response.message;
          const subscription = this.playlistForm.valueChanges.subscribe({
            next: () => {
              this.success = '';
              subscription.unsubscribe();
            }
          });
        },
        error: response => {
          this.playlistForm.setErrors({ error: true });
          this.error = response.error.message;
          const subscription = this.playlistForm.valueChanges.subscribe({
            next: () => {
              this.error = '';
              this.playlistForm.setErrors(null);
              subscription.unsubscribe();
            }
          });
        }
      });
  }
}
