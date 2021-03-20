import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button-icon',
  templateUrl: 'delete-button-icon.component.html'
})

export class DeleteButtonIconComponent {
  @Input() disabled = false;
  @Output() delete = new EventEmitter();

  public onDelete(): void {
    this.delete.emit();
  }
}
