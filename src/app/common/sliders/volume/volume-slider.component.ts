import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-volume-slider',
  templateUrl: 'volume-slider.component.html',
  styleUrls: ['volume-slider.component.less']
})

export class VolumeSliderComponent {
  @Input() volume = 1;
  @Output() volumeChange = new EventEmitter<number>();

  changeVolume(value: number): void {
    this.volumeChange.emit(value);
  }
}
