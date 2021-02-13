import { Component, Input, OnInit } from '@angular/core';
import { PlaylistModel } from '../playlist.model';

@Component({
  selector: 'app-inactive-playlist-item',
  templateUrl: 'inactive-playlist-item.component.html'
})

export class InactivePlaylistItemComponent {
  @Input() playlist?: PlaylistModel;
}
