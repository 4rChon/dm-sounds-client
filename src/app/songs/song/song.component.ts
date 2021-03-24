import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AudioSourceService } from 'src/app/audio-sources/audio-source.service';
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

  constructor(
    private readonly songService: SongService,
    private readonly colourService: ColourService
  ) { }

  public ngOnInit(): void {
    this.colour = this.colourService.RGBtoCSS(this.song.colour);
    this.state = this.songService.getOrCreateSongState(this.song);
  }

  public onEject(): void {
    this.ejecting = true;
    this.eject.emit(this.song.id);
  }
}
