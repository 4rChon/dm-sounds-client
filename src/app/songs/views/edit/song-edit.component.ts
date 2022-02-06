import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SongAPIService } from '@app-common/api-services/song-api.service';
import { SongViewModel } from '@app-songs/view-models';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-song-edit',
  templateUrl: 'song-edit.component.html',
  styleUrls: ['../../../common/forms/forms.less']
})

export class SongEditComponent implements OnInit, OnDestroy {
  public song?: SongViewModel;
  public songForm!: FormGroup;
  public submitting = false;
  public error = '';
  public success = '';

  private subscriptions: Array<Subscription> = [];

  constructor(
    private readonly songAPIService: SongAPIService,
    private readonly route: ActivatedRoute
  ) { }

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
    const routeSubscription = this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (!id) {
        return;
      }

      const songSubscription = this.songAPIService.getSong(id).subscribe(song => {
        this.song = song;

        this.songForm = new FormGroup({
          name: new FormControl(this.song.name, [Validators.required]),
          filters: new FormControl([...this.song.filters]),
          colour: new FormControl(this.song.colour),
          loop: new FormControl(this.song.loop),
          replaceAll: new FormControl(this.song.replaceAll)
        });
      });

      this.subscriptions.push(songSubscription);
    });

    this.subscriptions.push(routeSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(value => value.unsubscribe());
  }

  public async onSubmit(): Promise<void> {
    if (!this.song) {
      return;
    }

    this.submitting = true;
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
      .pipe(finalize(() => this.submitting = false))
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
