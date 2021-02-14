import { Component, Input } from '@angular/core';
import PlaylistState from '../../playlist.state';

@Component({
  selector: 'app-preview-playlist-item',
  templateUrl: 'preview-playlist-item.component.html'
})

export class PreviewPlaylistItemComponent {
  @Input() playlist!: PlaylistState;
}
