import { Component, Input } from '@angular/core';
import { PlaylistModel } from '../playlist.model';

@Component({
  selector: 'app-preview-playlist-item',
  templateUrl: 'preview-playlist-item.component.html'
})

export class PreviewPlaylistItemComponent {
  @Input() playlist?: PlaylistModel;
}
