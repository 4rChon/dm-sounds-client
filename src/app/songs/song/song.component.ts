import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColourService } from '@app-common/colour.service';
import { TooltipConstants } from '@app-common/tooltip.constants';
import { DragDropService } from '@app-droplists/dragdrop.service';
import { SongDeleteFormComponent } from '@app-songs/forms/delete/song-delete-form.component';
import { SongEditFormComponent } from '@app-songs/forms/edit/song-edit-form.component';
import { SongStateModel } from '@app-songs/song-state.model';
import { SongService } from '@app-songs/song.service';
import { SongViewModel } from '@app-songs/view-models';
import { AudioSourceService } from 'src/app/audio-sources/audio-source.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.less']
})
export class SongComponent implements OnInit {
  @Input() song!: SongViewModel;
  @Input() active!: boolean;
  @Output() eject = new EventEmitter();

  public ejectTooltip = TooltipConstants.EjectSong;

  public colour!: string;
  public state!: SongStateModel;
  public ejecting = false;
  public audioElement!: HTMLAudioElement;

  constructor(
    private readonly songService: SongService,
    private readonly dragDropService: DragDropService,
    private readonly audioSourceService: AudioSourceService,
    private readonly dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    console.log(this.song);
    this.colour = this.song.colour;
    this.state = this.songService.getOrCreateSongState(this.song);
    this.audioElement = this.audioSourceService.getOrCreateAudioSource(this.song._id);
  }


  public openEditDialog(): void {
    this.dialog.open(SongEditFormComponent, { data: this.song });
  }

  public openDeleteDialog(): void {
    this.dialog.open(SongDeleteFormComponent, { data: this.song._id });
  }

  public onEject(): void {
    this.ejecting = true;
    this.eject.emit(this.song._id);
  }

  public enableDragDrop(): void {
    this.dragDropService.enableDragDrop();
  }

  public disableDragDrop(): void {
    this.dragDropService.disableDragDrop();
  }
}
