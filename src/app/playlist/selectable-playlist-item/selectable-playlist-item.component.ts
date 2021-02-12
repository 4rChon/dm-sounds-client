import { Component, Input, OnInit } from '@angular/core';
import { PlaylistModel } from '../playlist.model';

@Component({
  selector: 'app-selectable-playlist-item',
  templateUrl: 'selectable-playlist-item.component.html'
})

export class SelectablePlaylistItemComponent {
  @Input() playlist?: PlaylistModel;
}
