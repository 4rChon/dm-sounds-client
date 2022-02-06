import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlaylistAPIService } from '@app-common/api-services/playlist-api.service';
import { PlaylistCreateViewModel } from '@app-playlists/view-models/playlist-create.view-model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-playlist-create',
  templateUrl: 'playlist-create.component.html',
  styleUrls: ['../../../common/forms/forms.less']
})

export class PlaylistCreateComponent implements OnInit {
  public playlistForm!: FormGroup;

  public submitting = false;
  public error = '';
  public success = '';

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

  constructor(private readonly playlistAPIService: PlaylistAPIService) { }

  ngOnInit(): void {
    this.playlistForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      filters: new FormControl([]),
      songs: new FormControl([]),
      colour: new FormControl('#fff'),
      loop: new FormControl(false),
      shuffle: new FormControl(false),
      replaceAll: new FormControl(false)
    });
  }

  public async onSubmit(): Promise<void> {
    this.submitting = true;

    const model: PlaylistCreateViewModel = {
      name: this.name?.value,
      filters: this.filters?.value,
      songs: this.songs?.value,
      colour: this.colour?.value,
      loop: this.loop?.value,
      shuffle: this.shuffle?.value,
      replaceAll: this.replaceAll?.value
    };

    this.playlistAPIService.createPlaylist(model)
      .pipe(finalize(() => this.submitting = false))
      .subscribe({
        next: () => {
          this.playlistForm.setErrors(null);
          this.success = 'Playlist created!';
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
