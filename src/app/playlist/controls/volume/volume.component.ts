import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-volume',
  templateUrl: 'volume.component.html',
  styleUrls: ['volume.component.less']
})

export class VolumeComponent {
  @Input() audioElement!: HTMLAudioElement;

  @Output() volumeEnterHover = new EventEmitter<any>();
  @Output() volumeLeaveHover = new EventEmitter<any>();

  set volume(value: number) {
    this.audioElement.volume = value;
  }

  get volume(): number {
    return this.audioElement.volume ?? 1;
  }

  public onMouseEnter(event: any): void {
    this.volumeEnterHover.emit(event);
  }

  public onMouseLeave(event: any): void {
    this.volumeLeaveHover.emit(event);
  }
}
