import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlaylistAPIService } from '@app-api-services/playlist-api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-playlist-delete-form',
  templateUrl: 'playlist-delete-form.component.html',
  styleUrls: ['../../../common/forms/forms.less', 'playlist-delete-form.component.less']
})

export class PlaylistDeleteFormComponent {
  public error = '';
  public success = '';
  public deleting = false;

  constructor(
    private readonly playlistAPIService: PlaylistAPIService,
    @Inject(MAT_DIALOG_DATA) public id: string) { }

  public onSubmit(): void {
    this.deleting = true;
    this.playlistAPIService.removePlaylist(this.id)
      .pipe(finalize(() => this.deleting = false))
      .subscribe({
        next: response => {
          this.success = response.message;
        },
        error: reason => {
          this.error = reason.error.message;
        }
      });
  }
}
