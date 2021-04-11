import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SongAPIService } from '@app-api-services/song-api.service';
import { CampaignActionsService } from '@app-campaigns/campaign-actions/campaign-actions.service';
import { SongViewModel } from '@app-songs/view-models';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-song-eidt-form',
  templateUrl: 'song-edit-form.component.html',
  styleUrls: ['../../../common/forms/forms.less']
})

export class SongEditFormComponent implements OnInit {
  public songForm!: FormGroup;
  public pending = false;
  public error = '';
  public success = '';

  constructor(
    private readonly songAPIService: SongAPIService,
    @Inject(MAT_DIALOG_DATA) public song: SongViewModel) { }

  get name(): AbstractControl | null {
    return this.songForm.get('name');
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
  get replaceAll(): AbstractControl | null {
    return this.songForm.get('replaceAll');
  }

  ngOnInit(): void {
    this.songForm = new FormGroup({
      name: new FormControl(this.song.name, [Validators.required]),
      filters: new FormControl([...this.song.filters]),
      colour: new FormControl(this.song.colour),
      loop: new FormControl(this.song.loop),
      replaceAll: new FormControl(this.song.replaceAll)
    });
  }

  public async onSubmit(): Promise<void> {
    this.pending = true;
    const model: SongViewModel = {
      _id: this.song._id,
      songId: this.song.songId,
      loop: this.loop?.value,
      replaceAll: this.replaceAll?.value,
      name: this.name?.value,
      filters: this.filters?.value,
      thumbnail: this.song.thumbnail,
      colour: this.colour?.value
    };

    this.songAPIService.editSong(model)
      .pipe(finalize(() => this.pending = false))
      .subscribe({
        next: () => {
          this.songForm.setErrors(null);
          this.success = 'Song edited!';
          const subscription = this.songForm.valueChanges.subscribe({
            next: () => {
              this.success = '';
              subscription.unsubscribe();
            }
          });
        },
        error: (response) => {
          this.songForm.setErrors({ error: true });
          this.error = response.error.message;
          const subscription = this.songForm.valueChanges.subscribe(
            () => {
              this.error = '';
              this.songForm.setErrors(null);
              subscription.unsubscribe();
            }
          );
        }
      });
  }
}
