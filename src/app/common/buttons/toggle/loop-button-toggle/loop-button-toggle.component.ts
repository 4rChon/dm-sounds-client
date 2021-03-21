import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loop-button-toggle',
  templateUrl: 'loop-button-toggle.component.html'
})

export class LoopButtonToggleComponent {
  @Output() value = new EventEmitter<boolean>();
  @Input() initialValue = false;
}
