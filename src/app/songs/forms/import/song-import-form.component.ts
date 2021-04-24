import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SongAPIService } from '@app-api-services/song-api.service';
import { SongImportViewModel } from '@app-songs/view-models';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-song-import-form',
  templateUrl: 'song-import-form.component.html',
  styleUrls: ['../../../common/forms/forms.less']
})

export class SongImportFormComponent implements OnInit {
  constructor(private readonly songAPIService: SongAPIService) { }

  public songForm!: FormGroup;
  public submitting = false;
  public error = '';
  public success = '';

  get songId(): AbstractControl | null {
    return this.songForm.get('songId');
  }
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
      songId: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      filters: new FormControl([]),
      colour: new FormControl('#fff'),
      loop: new FormControl(false),
      replaceAll: new FormControl(false)
    });
  }

  public async onSubmit(): Promise<void> {
    this.submitting = true;
    const model: SongImportViewModel = this.songForm.value;
    this.songAPIService.importSong(model)
      .pipe(finalize(() => this.submitting = false))
      .subscribe({
        next: () => {
          this.songForm.setErrors(null);
          this.success = 'Song imported!';
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
