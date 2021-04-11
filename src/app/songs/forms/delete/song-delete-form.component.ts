import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SongAPIService } from '@app-api-services/song-api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-song-delete-form',
  templateUrl: 'song-delete-form.component.html',
  styleUrls: ['../../../common/forms/forms.less', 'song-delete-form.component.less']
})

export class SongDeleteFormComponent {
  public error = '';
  public success = '';
  public deleting = false;

  constructor(
    private readonly songAPIService: SongAPIService,
    @Inject(MAT_DIALOG_DATA) public id: string) { }

  public onSubmit(): void {
    this.deleting = true;
    this.songAPIService.removeSong(this.id)
      .pipe(finalize(() => this.deleting = false))
      .subscribe({
        next: response => {
          this.success = 'Song deleted!';
        },
        error: response => {
          this.error = response.error.message;
        }
      });
  }
}
