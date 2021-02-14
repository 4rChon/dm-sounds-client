import { Component, Input } from '@angular/core';
import { IconService } from 'src/app/common/icon.service';
import PlaylistState from '../../playlist.state';

@Component({
  selector: 'app-inactive-playlist-item',
  templateUrl: 'inactive-playlist-item.component.html',
  styleUrls: ['../playlist-item.component.less']
})

export class InactivePlaylistItemComponent {
  @Input() playlist!: PlaylistState;

  public shuffle = false;
  public loop = false;

  constructor(private readonly iconService: IconService) { }

  public toggleShuffle(value: boolean): void {
    this.shuffle = value;
    this.playlist.model.shuffle = this.shuffle;
  }

  public toggleLoop(value: boolean): void {
    this.loop = value;
    this.playlist.model.loop = this.loop;
  }
}
