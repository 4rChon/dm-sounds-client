import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoopType } from '../common/loop.enum';
import { YTDLService } from '../common/ytdl.service';
import { YTPLService } from '../common/ytpl.service';
import { Playlist } from './playlist';
import { PlaylistService } from './playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: 'playlist.component.html',
})
export class PlaylistComponent implements OnInit, OnDestroy {
  @Input() playlistId = '';

  playlist?: Playlist;
  constructor(
    private readonly playlistService: PlaylistService,
    private readonly ytplService: YTPLService,
    private readonly ytdlService: YTDLService
  ) {}

  ngOnInit(): void {
    this.ytplService.getPlaylistItems(this.playlistId).subscribe((model) => {
      this.playlist = new Playlist(model, this.ytdlService, true);
      this.playlistService.addPlaylist(this.playlist);
    });
  }

  public isLoopSingle(): boolean {
    return this.playlist?.loop === LoopType.SINGLE;
  }

  public onNext(): void {
    this.playlist?.next();
  }

  public onPrev(): void {
    this.playlist?.prev();
  }

  public onPlay(): void {
    this.playlist?.play();
  }

  public onStop(): void {
    this.playlist?.stop();
  }

  public onShuffle(shuffle: boolean): void {
    this.playlist?.setShuffle(shuffle);
  }

  public onLoop(loop: LoopType): void {
    this.playlist?.setLoop(loop);
  }

  public removePlaylist(): void {
    this.playlist?.stop();
    this.playlistService.removePlaylist(this.playlistId);
  }

  ngOnDestroy(): void {
    this.removePlaylist();
  }
}
