import { Component, Input } from '@angular/core';
import PlaylistStateModel from '../../playlist-state.model';

@Component({
  selector: 'app-replace-all',
  templateUrl: 'replace-all.component.html'
})

export class ReplaceAllComponent {
  @Input() playlist!: PlaylistStateModel;
}
