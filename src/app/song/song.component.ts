import { Component, Input } from '@angular/core';
import SongViewModel from '../common/view-models/song.view-model';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.less']
})
export class SongComponent {
  @Input() song!: SongViewModel;
}
