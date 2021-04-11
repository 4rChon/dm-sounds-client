import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DroplistItem } from 'src/app/droplists/droplist-item.interface';
import { ColourService } from '../../colour.service';

@Component({
  selector: 'app-dragdrop-input',
  templateUrl: 'dragdrop-input.component.html',
  styleUrls: ['dragdrop-input.component.less']
})

export class DragDropInputComponent {
  @Input() addedItems: Array<DroplistItem> = [];
  @Input() items!: Array<DroplistItem>;
  @Input() addedLabel = '';
  @Input() availableLabel = '';
  @Input() loading = false;
  @Output() addedItemsChange = new EventEmitter<Array<DroplistItem>>();

  public searchAvailable = new FormControl('');
  public searchAdded = new FormControl('');

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

  public HEXtoRGB(colour: any): string {
    return ColourService.HEXtoRGB(colour);
  }
}
