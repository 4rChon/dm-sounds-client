import { Component, Input } from '@angular/core';
import PlaylistStateModel from '../../playlist-state.model';

@Component({
  selector: 'app-inactive-playlist-item',
  templateUrl: 'inactive-playlist-item.component.html',
  styleUrls: ['../playlist-item.component.less']
})

export class InactivePlaylistItemComponent {
  @Input() playlist!: PlaylistStateModel;

  public toggleShuffle(value: boolean): void {
    this.playlist.shuffle = value;
  }

  public toggleLoop(value: boolean): void {
    this.playlist.loop = value;
  }

  public toggleReplaceAll(value: boolean): void {
    this.playlist.replaceAll = value;
  }
}
