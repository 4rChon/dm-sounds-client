import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlaylistDeleteComponent } from '@app-playlists/views/delete/playlist-delete.component';
import { PlaylistEditComponent } from '@app-playlists/views/edit/playlist-edit.component';
import { PlaylistViewModel } from '@app-playlists/view-models';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TooltipConstants } from 'src/app/common/tooltip.constants';
import { PlaylistStateModel } from '../playlist-state.model';
import { PlaylistService } from '../playlist.service';
import { AudioSourceService } from '@app-common/audio-sources/audio-source.service';
import { DragDropService } from '@app-droplists/dragdrop.service';
import { Router } from '@angular/router';

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
    private readonly router: Router,
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

  public openEditView(): void {
    this.router.navigate(['playlists', 'edit', this.playlist._id]);
  }

  public openDeleteDialog(): void {
    this.dialog.open(PlaylistDeleteComponent, { data: this.playlist._id });
  }
}
