import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlaylistDeleteFormComponent } from '@app-playlists/playlist-forms/delete/playlist-delete-form.component';
import { PlaylistEditFormComponent } from '@app-playlists/playlist-forms/edit/playlist-edit-form.component';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AudioSourceService } from 'src/app/audio-sources/audio-source.service';
import { TooltipConstants } from 'src/app/common/tooltip.constants';
import { DragDropService } from 'src/app/droplists/dragdrop.service';
import { PlaylistStateModel } from '../playlist-state.model';
import { PlaylistService } from '../playlist.service';
import { PlaylistViewModel } from '../view-models/playlist.view-model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['../../../app/common/audio-card.less']
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
    private readonly audioSourceService: AudioSourceService,
    private readonly dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.state = this.playlistService.getOrCreatePlaylistState(this.playlist);
    this.songIndexSubscription = this.state.index$.subscribe(index => {
      this.currentSongId$.next(this.playlist.songs[index].songId);
    });

    this.songIdSubscription = this.currentSongId$.subscribe(songId => {
      this.audioElement = this.audioSourceService.getOrCreateAudioSource(songId);
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

  public openEditDialog(): void {
    this.dialog.open(PlaylistEditFormComponent, { data: this.playlist });
  }

  public openDeleteDialog(): void {
    this.dialog.open(PlaylistDeleteFormComponent, { data: this.playlist._id });
  }
}
