import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-next-button',
  templateUrl: 'next-button.component.html'
})

export class NextButtonComponent {
  @Input() disabled = false;
  @Input() tooltip = '';
  @Output() next = new EventEmitter();
}
