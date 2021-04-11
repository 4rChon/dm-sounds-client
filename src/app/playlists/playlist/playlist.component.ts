import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AudioSourceService } from 'src/app/audio-sources/audio-source.service';
import { TooltipConstants } from 'src/app/common/tooltip.constants';
import { DragDropService } from 'src/app/droplists/dragdrop.service';
import { PlaylistStateModel } from '../playlist-state.model';
import { PlaylistService } from '../playlist.service';
import { PlaylistViewModel } from '../playlist.view-model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.less']
})
export class PlaylistComponent implements OnInit, OnDestroy {
  @Input() playlist!: PlaylistViewModel;
  @Input() active!: boolean;
  @Output() eject = new EventEmitter();

  public ejectTooltip = TooltipConstants.EjectPlaylist;
  public nextTooltip = TooltipConstants.PlayNext;
  public prevTooltip = TooltipConstants.PlayPrev;

  public state!: PlaylistStateModel;
  public ejecting = false;
  public currentSongId$ = new BehaviorSubject<string>('');
  public audioElement!: HTMLAudioElement;

  private songIndexSubscription!: Subscription;
  private songIdSubscription!: Subscription;

  constructor(
    private readonly playlistService: PlaylistService,
    private readonly dragDropService: DragDropService,
    private readonly audioSourceService: AudioSourceService
  ) { }

  public ngOnInit(): void {
    this.state = this.playlistService.getOrCreatePlaylistState(this.playlist);
    this.songIndexSubscription = this.state.index$.subscribe(index => {
      this.currentSongId$.next(this.playlist.songs[index]._id);
    });

    this.songIdSubscription = this.currentSongId$.subscribe(id => {
      this.audioElement = this.audioSourceService.getOrCreateAudioSource(id);
    });
  }

  public ngOnDestroy(): void {
    this.songIdSubscription?.unsubscribe();
    this.songIndexSubscription?.unsubscribe();
  }

  public onSongEnd(): void {
    this.state.getNextIndex();
  }

  public onEject(): void {
    this.ejecting = true;
    this.eject.emit(this.currentSongId$.value);
  }

  public onSongClick(index: any): void {
    this.state.index = index;
  }

  public enableDragDrop(): void {
    this.dragDropService.enableDragDrop();
  }

  public disableDragDrop(): void {
    this.dragDropService.disableDragDrop();
  }
}
