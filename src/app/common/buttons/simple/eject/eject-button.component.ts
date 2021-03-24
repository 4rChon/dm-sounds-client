import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eject-button',
  templateUrl: 'eject-button.component.html'
})

export class EjectButtonComponent {
  @Input() disabled = false;
  @Output() eject = new EventEmitter();
}
