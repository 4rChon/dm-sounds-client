import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shuffle-button-toggle',
  templateUrl: 'shuffle-button-toggle.component.html'
})

export class ShuffleButtonToggleComponent {
  @Output() value = new EventEmitter<boolean>();
  @Input() initialValue = false;
}
