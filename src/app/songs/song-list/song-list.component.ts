import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SongViewModel } from '@app-songs/view-models';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.less']
})
export class SongListComponent {
  @Input() songs!: Array<SongViewModel>;
  @Input() currentIndex!: number;
  @Input() active!: boolean;
  @Input() loop!: boolean;
  @Input() shuffle!: boolean;
  @Output() audioEnd = new EventEmitter();
  @Output() songClick = new EventEmitter<number>();
}
