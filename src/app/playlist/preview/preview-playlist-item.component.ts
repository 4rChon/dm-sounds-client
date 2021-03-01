import { Component, Input } from '@angular/core';
import PlaylistStateModel from '../playlist-state.model';

@Component({
  selector: 'app-preview-playlist-item',
  templateUrl: 'preview-playlist-item.component.html'
})

export class PreviewPlaylistItemComponent {
  @Input() playlist!: PlaylistStateModel;
}
