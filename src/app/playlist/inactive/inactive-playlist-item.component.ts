import { Component, Input } from '@angular/core';
import PlaylistStateModel from '../playlist-state.model';

@Component({
  selector: 'app-inactive-playlist-item',
  templateUrl: 'inactive-playlist-item.component.html',
  styleUrls: ['../playlist.component.less']
})

export class InactivePlaylistItemComponent {
  @Input() playlist!: PlaylistStateModel;
}
