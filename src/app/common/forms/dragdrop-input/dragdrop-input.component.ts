import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DroplistItem } from '@app-droplists/droplist-item.interface';

@Component({
  selector: 'app-dragdrop-input',
  templateUrl: 'dragdrop-input.component.html',
  styleUrls: ['dragdrop-input.component.less']
})

export class DragDropInputComponent implements OnChanges {
  @Input() addedItems: Array<DroplistItem> = [];
  @Input() availableItems!: Array<DroplistItem>;
  @Input() addedLabel = '';
  @Input() availableLabel = '';
  @Input() loading = false;
  @Output() addedItemsChange = new EventEmitter<Array<DroplistItem>>();

  public items: Array<DroplistItem> = [];

  public searchAvailable = new FormControl('');
  public searchAdded = new FormControl('');

  ngOnChanges(changes: SimpleChanges): void {
    this.items = changes.availableItems.currentValue
      .filter((item: DroplistItem) => !this.addedItems.find(addedItem => item.data._id === addedItem.data._id));
  }

  public drop(event: CdkDragDrop<DroplistItem[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.addedItemsChange.emit(this.addedItems);
    }
  }
}
