import { Component, Input, OnInit } from '@angular/core';
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
  public colour!: string;

  @Input() song!: SongViewModel;
  @Input() active!: boolean;

  public state!: SongStateModel;

  constructor(
    private readonly songService: SongService,
    private readonly colourService: ColourService
  ) { }

  public ngOnInit(): void {
    this.colour = this.colourService.RGBtoCSS(this.song.colour);
    this.state = this.songService.getOrCreateSongState(this.song);
  }
}
