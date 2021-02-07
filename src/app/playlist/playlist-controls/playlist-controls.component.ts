import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-playlist-controls',
  templateUrl: 'playlist-controls.component.html',
})
export class PlaylistControlsComponent {
  @Output() play = new EventEmitter();
  @Output() stop = new EventEmitter();
  @Output() prev = new EventEmitter();
  @Output() next = new EventEmitter();
}
