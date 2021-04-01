import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-button-icon',
  templateUrl: 'edit-button-icon.component.html'
})

export class EditButtonIconComponent {
  @Input() disabled = false;
  @Input() tooltip = '';
  @Output() edit = new EventEmitter();

  public onEdit(): void {
    this.edit.emit();
  }
}
