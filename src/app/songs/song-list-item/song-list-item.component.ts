import { Component, Input } from '@angular/core';
import SongViewModel from '../song.view-model';

@Component({
  selector: 'app-song-list-item',
  templateUrl: './song-list-item.component.html',
  styleUrls: ['./song-list-item.component.less']
})
export class SongListItemComponent {
  @Input() song!: SongViewModel;
  @Input() active = false;
}
