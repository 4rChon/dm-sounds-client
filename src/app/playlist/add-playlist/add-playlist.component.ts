import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { APIService } from 'src/app/common/api.service';
import { PlaylistFormModel } from 'src/app/common/models/playlist-form.model';

@Component({
  selector: 'app-add-playlist',
  templateUrl: 'add-playlist.component.html',
  styleUrls: ['add-playlist.component.less']
})

export class AddPlaylistComponent {

  constructor(private readonly apiService: APIService) { }

  playlistId = new FormControl('');
  loop = new FormControl(false);
  shuffle = new FormControl(false);
  replaceAll = new FormControl(false);

  public async onSubmit(): Promise<void> {
    const model: PlaylistFormModel = {
      id: this.playlistId.value,
      loop: this.loop.value,
      shuffle: this.shuffle.value,
      replaceAll: this.replaceAll.value
    };
    await this.apiService.addPlaylist(model);
  }
}
