import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { APIService } from 'src/app/common/api.service';

@Component({
  selector: 'app-add-playlist',
  templateUrl: 'add-playlist.component.html'
})

export class AddPlaylistComponent {

  constructor(private readonly apiService: APIService) { }

  playlistId = new FormControl('');

  public async onSubmit(): Promise<void> {
    await this.apiService.addPlaylist(this.playlistId.value);
  }
}
