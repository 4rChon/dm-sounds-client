import { Component, Input, OnInit } from '@angular/core';
import PlaylistViewModel from 'src/app/playlists/playlist.view-model';
import PlaylistStateModel from '../playlist-state.model';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.less']
})
export class PlaylistComponent implements OnInit {
  @Input() playlist!: PlaylistViewModel;
  @Input() active!: boolean;

  public state!: PlaylistStateModel;

  constructor(private readonly playlistService: PlaylistService) { }

  public ngOnInit(): void {
    this.state = this.playlistService.getOrCreatePlaylistState(this.playlist);
  }
}
