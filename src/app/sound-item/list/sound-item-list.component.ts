import { Component, EventEmitter, Input, Output } from '@angular/core';
import PlaylistStateModel from 'src/app/playlist/playlist-state.model';

@Component({
  selector: 'app-sound-item-list',
  templateUrl: 'sound-item-list.component.html'
})

export class SoundItemListComponent {
  @Input() playlist!: PlaylistStateModel;

  @Output() update = new EventEmitter<number>();
}
