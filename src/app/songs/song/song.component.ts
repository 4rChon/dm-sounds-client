import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AudioSourceService } from 'src/app/audio-sources';
import { TooltipConstants } from 'src/app/common/tooltip.constants';
import { DragDropService } from 'src/app/droplists/dragdrop.service';
import { ColourService } from '../../common/colour.service';
import { SongStateModel } from '../song-state.model';
import { SongService } from '../song.service';
import { SongViewModel } from '../view-models/song.view-model';

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
    private readonly audioSourceService: AudioSourceService
  ) { }

  public ngOnInit(): void {
    console.log(this.song);
    this.colour = ColourService.HEXtoRGB(this.song.colour);
    this.state = this.songService.getOrCreateSongState(this.song);
    this.audioElement = this.audioSourceService.getOrCreateAudioSource(this.song._id);
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
