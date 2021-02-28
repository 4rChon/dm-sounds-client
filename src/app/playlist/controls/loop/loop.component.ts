import { Component, Input } from '@angular/core';
import PlaylistStateModel from '../../playlist-state.model';

@Component({
  selector: 'app-loop',
  templateUrl: 'loop.component.html'
})

export class LoopComponent {
  @Input() playlist!: PlaylistStateModel;
}
