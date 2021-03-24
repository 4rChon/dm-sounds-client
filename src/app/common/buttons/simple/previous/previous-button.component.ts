import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-previous-button',
  templateUrl: 'previous-button.component.html'
})

export class PreviousButtonComponent {
  @Input() disabled = false;
  @Output() previous = new EventEmitter();
}
