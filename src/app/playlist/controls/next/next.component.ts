import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import PlaylistStateModel from '../../playlist-state.model';

@Component({
  selector: 'app-next',
  templateUrl: 'next.component.html'
})

export class NextComponent {
  @Input() playlist!: PlaylistStateModel;
  @Output() next = new EventEmitter<number>();

  public click(): void {
    this.next.emit(this.playlist.nextId());
  }
}
