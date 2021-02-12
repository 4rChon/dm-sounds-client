import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/common/api.service';
import { PlaylistModel } from '../playlist.model';

@Component({
  selector: 'app-selectable-playlist-container',
  templateUrl: 'selectable-playlist-container.component.html'
})

export class SelectablePlaylistContainerComponent {
  constructor(private readonly apiService: APIService) { }

  playlists$: Observable<Array<PlaylistModel>> = this.apiService.getPlaylists();
}
