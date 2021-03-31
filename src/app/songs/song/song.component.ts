import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AudioSourceService } from 'src/app/audio-sources';
import DragDropService from 'src/app/droplists/dragdrop.service';
import { ColourService } from '../../common/colour.service';
import SongStateModel from '../song-state.model';
import { SongService } from '../song.service';
import SongViewModel from '../song.view-model';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.less']
})
export class SongComponent implements OnInit {
  @Input() song!: SongViewModel;
  @Input() active!: boolean;
  @Output() eject = new EventEmitter();

  public colour!: string;
  public state!: SongStateModel;
  public ejecting = false;
  public audioElement!: HTMLAudioElement;

  constructor(
    private readonly songService: SongService,
    private readonly colourService: ColourService,
    private readonly dragDropService: DragDropService,
    private readonly audioSourceService: AudioSourceService
  ) { }

  public ngOnInit(): void {
    this.colour = this.colourService.RGBtoCSS(this.song.colour);
    this.state = this.songService.getOrCreateSongState(this.song);
    this.audioElement = this.audioSourceService.getOrCreateAudioSource(this.song.id);
  }

  public onEject(): void {
    this.ejecting = true;
    this.eject.emit(this.song.id);
  }

  public enableDragDrop(): void {
    this.dragDropService.enableDragDrop();
  }

  public disableDragDrop(): void {
    this.dragDropService.disableDragDrop();
  }
}
