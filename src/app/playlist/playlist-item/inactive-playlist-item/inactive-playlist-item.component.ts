import { Component, Input, OnInit } from '@angular/core';
import { IconService } from 'src/app/common/icon.service';
import PlaylistState from '../../playlist.state';

@Component({
  selector: 'app-inactive-playlist-item',
  templateUrl: 'inactive-playlist-item.component.html',
  styleUrls: ['../playlist-item.component.less']
})

export class InactivePlaylistItemComponent {
  @Input() playlist!: PlaylistState;

  constructor(private readonly iconService: IconService) { }

  public toggleShuffle(value: boolean): void {
    this.playlist.model.shuffle = value;
  }

  public toggleLoop(value: boolean): void {
    this.playlist.model.loop = value;
  }

  public toggleReplaceAll(value: boolean): void {
    this.playlist.model.replaceAll = value;
  }
}
