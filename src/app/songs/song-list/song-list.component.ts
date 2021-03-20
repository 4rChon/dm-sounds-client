import { Component, Input, OnInit } from '@angular/core';
import SongViewModel from '../song.view-model';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.less']
})
export class SongListComponent {
  @Input() songs!: Array<SongViewModel>;
  @Input() currentIndex!: number;
  @Input() active!: boolean;
}
