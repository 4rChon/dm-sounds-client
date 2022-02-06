import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Indexable, Nameable } from '@app-common/interfaces';

@Component({
  selector: 'app-index-item',
  templateUrl: './index-item.component.html',
  styleUrls: ['index-item.component.less']
})
export class IndexItemComponent {
  @Input() item!: Nameable & Indexable;

  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  public onEdit(): void {
    this.edit.emit(this.item._id);
  }

  public onDelete(): void {
    this.delete.emit(this.item._id)
  }
}
