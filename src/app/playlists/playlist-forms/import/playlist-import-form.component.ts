import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/api-services/api.service';
import { ImportPlaylistViewModel } from './import-playlist-view-model';

@Component({
  selector: 'app-playlist-import-form',
  templateUrl: 'playlist-import-form.component.html'
})

export class PlaylistImportFormComponent implements OnInit {
  constructor(
    private readonly apiService: APIService,
    //private readonly playlistService: PlaylistService
  ) { }

  public playlistForm!: FormGroup;
  public pending = false;
  public error = '';
  public success = '';

  get playlistId(): AbstractControl | null {
    return this.playlistForm.get('playlistId');
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
      filters: new FormControl(''),
      colour: new FormControl(''),
      loop: new FormControl(false),
      shuffle: new FormControl(false),
      replaceAll: new FormControl(false)
    });
  }

  public async onSubmit(): Promise<void> {
    // this.pending = true;

    const model: ImportPlaylistViewModel = {
      id: this.playlistId?.value,
      filters: this.filters?.value,
      colour: this.colour?.value,
      loop: this.loop?.value,
      shuffle: this.shuffle?.value,
      replaceAll: this.replaceAll?.value
    };

    this.apiService.importPlaylist(model);
    // this.apiService.addPlaylist(model)
    //   .then(response => {
    //     this.playlistForm.setErrors(null);
    //     this.success = response.message;
    //     const subscription = this.playlistForm.valueChanges.subscribe(
    //       () => {
    //         this.success = '';
    //         subscription.unsubscribe();
    //       }
    //     );

    //     this.playlistService.fetchPlaylists();
    //   })
    //   .catch(response => {
    //     this.playlistForm.setErrors({ error: true });
    //     this.error = response.error.message;
    //     const subscription = this.playlistForm.valueChanges.subscribe(
    //       () => {
    //         this.error = '';
    //         this.playlistForm.setErrors(null);
    //         subscription.unsubscribe();
    //       }
    //     );
    //   })
    //   .finally(() =>
    //     this.pending = false
    //   );
  }
}
