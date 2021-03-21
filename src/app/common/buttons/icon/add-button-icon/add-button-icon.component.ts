import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-button-icon',
  templateUrl: 'add-button-icon.component.html'
})

export class AddButtonIconComponent {
  @Input() disabled = false;
  @Output() add = new EventEmitter();

  public onAdd(): void {
    this.add.emit();
  }
}
