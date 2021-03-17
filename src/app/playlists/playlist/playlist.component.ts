import { Component, Input } from '@angular/core';
import PlaylistViewModel from 'src/app/playlists/playlist.view-model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.less']
})
export class PlaylistComponent {
  @Input() playlist!: PlaylistViewModel;
  @Input() active!: boolean;
}
