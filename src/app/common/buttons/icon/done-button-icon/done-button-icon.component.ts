import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-done-button-icon',
  templateUrl: 'done-button-icon.component.html'
})

export class DoneButtonIconComponent {
  @Input() disabled = false;
  @Input() tooltip = '';
  @Output() done = new EventEmitter();

  public onDone(): void {
    this.done.emit();
  }
}
