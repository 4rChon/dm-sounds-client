import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { PlaylistAPIService } from 'src/app/api-services/playlist-api.service';
import { PlaylistImportViewModel } from '../../view-models/playlist-import-view-model';

@Component({
  selector: 'app-playlist-import-form',
  templateUrl: 'playlist-import-form.component.html',
  styleUrls: ['../../../common/forms/forms.less']
})

export class PlaylistImportFormComponent implements OnInit {
  constructor(
    private readonly playlistAPIService: PlaylistAPIService
    //private readonly playlistService: PlaylistService
  ) { }

  public playlistForm!: FormGroup;
  public pending = false;
  public error = '';
  public success = '';

  get playlistId(): AbstractControl | null {
    return this.playlistForm.get('playlistId');
  }
  get name(): AbstractControl | null {
    return this.playlistForm.get('name');
  }
  get filters(): AbstractControl | null {
    return this.playlistForm.get('filters');
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

  ngOnInit(): void {
    this.playlistForm = new FormGroup({
      playlistId: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      filters: new FormControl([]),
      colour: new FormControl('#fff'),
      loop: new FormControl(false),
      shuffle: new FormControl(false),
      replaceAll: new FormControl(false)
    });
  }

  public async onSubmit(): Promise<void> {
    this.pending = true;
    const model: PlaylistImportViewModel = {
      playlistId: this.playlistId?.value,
      name: this.name?.value,
      filters: this.filters?.value,
      colour: this.colour?.value,
      loop: this.loop?.value,
      shuffle: this.shuffle?.value,
      replaceAll: this.replaceAll?.value
    };

    this.playlistAPIService.importPlaylist(model)
      .pipe(finalize(() => this.pending = false))
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
