import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DragDropService {
  private dragDropEnabledSubject = new BehaviorSubject<boolean>(true);
  public dragDropEnabled$ = this.dragDropEnabledSubject.asObservable();

  public disableDragDrop(): void {
    this.dragDropEnabledSubject.next(false);
  }

  public enableDragDrop(): void {
    this.dragDropEnabledSubject.next(true);
  }
}
