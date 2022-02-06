import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlaylistAPIService } from '@app-common/api-services/playlist-api.service';
import { DroplistItem } from '@app-droplists/droplist-item.interface';
import { PlaylistEditViewModel, PlaylistViewModel } from '@app-playlists/view-models';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-playlist-edit',
  templateUrl: 'playlist-edit.component.html',
  styleUrls: ['../../../common/forms/forms.less']
})

export class PlaylistEditComponent implements OnInit, OnDestroy {
  public playlist?: PlaylistViewModel;
  public playlistForm!: FormGroup;
  public submitting = false;
  public error = '';
  public success = '';

  private subscriptions: Array<Subscription> = [];

  constructor(
    private readonly playlistAPIService: PlaylistAPIService,
    private readonly route: ActivatedRoute
  ) { }

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

  ngOnInit(): void {
    const routeSubscription = this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        const playlistSubscription = this.playlistAPIService.getPlaylist(id).subscribe(playlist => {
          this.playlist = playlist;

          console.log(this.playlist);

          this.playlistForm = new FormGroup({
            name: new FormControl(this.playlist.name, [Validators.required]),
            filters: new FormControl(this.playlist.filters),
            songs: new FormControl(this.playlist.songs),
            colour: new FormControl(this.playlist.colour),
            loop: new FormControl(this.playlist.loop),
            shuffle: new FormControl(this.playlist.shuffle),
            replaceAll: new FormControl(this.playlist.replaceAll)
          });

          this.subscriptions.push(playlistSubscription);
        });
      }

    });

    this.subscriptions.push(routeSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(value => value.unsubscribe());
  }

  public async onSubmit(): Promise<void> {
    if (!this.playlist) {
      return;
    }

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
