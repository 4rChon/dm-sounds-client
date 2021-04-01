import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TooltipConstants } from 'src/app/common/tooltip.constants';
import { PlaylistService, PlaylistViewModel } from 'src/app/playlists';
import { SongService, SongViewModel } from 'src/app/songs';
import { DragDropService } from '../dragdrop.service';
import { DroplistItemType } from '../droplist-item-type.enum';
import { DroplistItem } from '../droplist-item.interface';
import { Droplist } from '../droplist.interface';
import { DroplistService } from '../droplist.service';

@Component({
  selector: 'app-droplist-container',
  templateUrl: 'droplist-container.component.html',
  styleUrls: ['droplist-container.component.less']
})

export class DroplistContainerComponent {
  public addDockTooltip = TooltipConstants.AddDock;
  public dragDropEnabled$: Observable<boolean>;
  public fetching = false;

  constructor(
    private readonly droplistService: DroplistService,
    private readonly dragDropService: DragDropService,
    private readonly playlistService: PlaylistService,
    private readonly songService: SongService) {
    this.dragDropEnabled$ = this.dragDropService.dragDropEnabled$;
  }

  public getActiveDroplists(): Array<Droplist> {
    return this.droplistService.getActiveDroplists();
  }

  public getInactiveDroplist(): Droplist {
    return this.droplistService.getInactiveDroplist();
  }

  public addDock(): void {
    this.droplistService.addDroplist('New Dock');
  }

  public drop(event: CdkDragDrop<Droplist>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data.items, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.data.active) {
        const droplistItem = event.previousContainer.data.items[event.previousIndex];
        const state = droplistItem.type === DroplistItemType.Playlist
          ? this.playlistService.getOrCreatePlaylistState(droplistItem.data as PlaylistViewModel)
          : this.songService.getOrCreateSongState(droplistItem.data as SongViewModel);

        if (state.replaceAll) {
          this.droplistService.clearActiveDroplist(event.container.data);
        }
      }

      transferArrayItem(event.previousContainer.data.items,
        event.container.data.items,
        event.previousIndex,
        event.currentIndex);
    }
  }

  public ejectItem(item: DroplistItem, droplist: Droplist): void {
    this.droplistService.ejectItem(item, droplist);
  }
}
