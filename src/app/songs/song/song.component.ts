import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TooltipConstants } from '@app-common/tooltip.constants';
import { DragDropService } from '@app-droplists/dragdrop.service';
import { SongDeleteComponent } from '@app-songs/views/delete/song-delete.component';
import { SongStateModel } from '@app-songs/song-state.model';
import { SongService } from '@app-songs/song.service';
import { SongViewModel } from '@app-songs/view-models';
import { Router } from '@angular/router';
import { AudioSourceService } from '@app-common/audio-sources/audio-source.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['../../../app/common/audio-card.less']
})
export class SongComponent implements OnInit {
  @Input() song!: SongViewModel;
  @Input() active!: boolean;
  @Output() eject = new EventEmitter();

  public ejectTooltip = TooltipConstants.EjectSong;

  public state!: SongStateModel;
  public ejecting = false;
  public audioElement!: HTMLAudioElement;

  constructor(
    private readonly songService: SongService,
    private readonly dragDropService: DragDropService,
    private readonly audioSourceService: AudioSourceService,
    private readonly router: Router,
    private readonly dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.state = this.songService.getOrCreateSongState(this.song);
    this.audioElement = this.audioSourceService.getOrCreateAudioSource(this.song.songId);
  }


  public openEditView(): void {
    this.router.navigate(['songs', 'edit', this.song._id]);
  }

  public openDeleteDialog(): void {
    this.dialog.open(SongDeleteComponent, { data: this.song._id });
  }

  public onEject(): void {
    this.ejecting = true;
    this.eject.emit(this.song.songId);
  }

  public enableDragDrop(): void {
    this.dragDropService.enableDragDrop();
  }

  public disableDragDrop(): void {
    this.dragDropService.disableDragDrop();
  }
}
