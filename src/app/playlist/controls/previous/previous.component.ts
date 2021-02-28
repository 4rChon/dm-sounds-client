import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import PlaylistStateModel from '../../playlist-state.model';

@Component({
  selector: 'app-previous',
  templateUrl: 'previous.component.html'
})

export class PreviousComponent {
  @Input() playlist!: PlaylistStateModel;
  @Output() prev = new EventEmitter<number>();

  public click(): void {
    this.prev.emit(this.playlist.prevId());
  }
}
