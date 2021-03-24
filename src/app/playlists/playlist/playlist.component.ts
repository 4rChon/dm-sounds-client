import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AudioSourceService } from 'src/app/audio-sources/audio-source.service';
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
  @Output() eject = new EventEmitter();

  public state!: PlaylistStateModel;
  public ejecting = false;

  constructor(
    private readonly playlistService: PlaylistService
  ) { }

  public ngOnInit(): void {
    this.state = this.playlistService.getOrCreatePlaylistState(this.playlist);
  }

  public onSongEnd(): void {
    this.state.getNextIndex();
  }

  public onEject(): void {
    this.ejecting = true;
    this.eject.emit(this.playlist.songs[this.state.index].id);
  }

  public onSongClick(index: any): void {
    this.state.index = index;
  }
}
