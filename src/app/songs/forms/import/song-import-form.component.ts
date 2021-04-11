import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SongAPIService } from 'src/app/api-services/song-api.service';
import { SongImportViewModel } from '../../view-models/song-import-view-model';

@Component({
  selector: 'app-song-import-form',
  templateUrl: 'song-import-form.component.html'
})

export class SongImportFormComponent implements OnInit {
  constructor(
    private readonly songAPIService: SongAPIService
  ) { }

  public songForm!: FormGroup;
  public pending = false;
  public error = '';
  public success = '';

  get playlistId(): AbstractControl | null {
    return this.songForm.get('id');
  }
  get filters(): AbstractControl | null {
    return this.songForm.get('filters');
  }
  get colour(): AbstractControl | null {
    return this.songForm.get('colour');
  }
  get loop(): AbstractControl | null {
    return this.songForm.get('loop');
  }
  get shuffle(): AbstractControl | null {
    return this.songForm.get('shuffle');
  }
  get replaceAll(): AbstractControl | null {
    return this.songForm.get('replaceAll');
  }

  ngOnInit(): void {
    this.songForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      filters: new FormControl(''),
      colour: new FormControl(''),
      loop: new FormControl(false),
      shuffle: new FormControl(false),
      replaceAll: new FormControl(false)
    });
  }

  public async onSubmit(): Promise<void> {
    // this.pending = true;

    const model: SongImportViewModel = {
      _id: this.playlistId?.value,
      filters: this.filters?.value,
      colour: this.colour?.value,
      loop: this.loop?.value,
      shuffle: this.shuffle?.value,
      replaceAll: this.replaceAll?.value
    };

    this.songAPIService.importSong(model);
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
