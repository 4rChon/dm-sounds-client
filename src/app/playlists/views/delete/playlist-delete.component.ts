import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlaylistAPIService } from '@app-common/api-services/playlist-api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-playlist-delete',
  templateUrl: 'playlist-delete.component.html',
  styleUrls: ['../../../common/forms/forms.less', 'playlist-delete.component.less']
})

export class PlaylistDeleteComponent {
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
