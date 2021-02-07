import { Component, EventEmitter, Output } from '@angular/core';
import { LoopType } from 'src/app/common/loop.enum';

@Component({
  selector: 'app-playlist-settings',
  templateUrl: 'playlist-settings.component.html',
})
export class PlaylistSettingsComponent {
  @Output() shuffle = new EventEmitter<boolean>();
  @Output() loop = new EventEmitter<LoopType>();

  constructor() {}

  public onShuffle(event: any): void {
    this.shuffle.emit(event.target.checked);
  }

  public onLoop(event: any): void {
    const value = event.target.value;
    if (value === 'loopSingle') {
      this.loop.emit(LoopType.SINGLE);
    } else if (value === 'loopAll') {
      this.loop.emit(LoopType.ALL);
    }
    this.loop.emit(LoopType.NONE);
  }
}
