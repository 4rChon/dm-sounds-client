import { Component, Input } from '@angular/core';
import PlaylistStateModel from '../../playlist-state.model';

@Component({
  selector: 'app-shuffle',
  templateUrl: 'shuffle.component.html'
})

export class ShuffleComponent {
  @Input() playlist!: PlaylistStateModel;
}
