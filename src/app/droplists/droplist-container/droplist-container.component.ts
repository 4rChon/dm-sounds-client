import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import DroplistItemType from 'src/app/playlists/playlist-item-type.enum';
import { PlaylistService } from 'src/app/playlists/playlist.service';
import PlaylistViewModel from 'src/app/playlists/playlist.view-model';
import { SongService } from 'src/app/songs/song.service';
import SongViewModel from 'src/app/songs/song.view-model';
import CampaignViewModel from '../../campaigns/campaign.view-model';
import DroplistItem from '../droplist-item.interface';
import Droplist from '../droplist.interface';
import { DroplistService } from '../droplist.service';

@Component({
  selector: 'app-droplist-container',
  templateUrl: 'droplist-container.component.html',
  styleUrls: ['droplist-container.component.less']
})

export class DroplistContainerComponent {
  public currentCampaign?: CampaignViewModel;
  public loading = false;

  constructor(
    private readonly droplistService: DroplistService,
    private readonly playlistService: PlaylistService,
    private readonly songService: SongService) { }

  public getActiveDroplists(): Array<Droplist> {
    return this.droplistService.getActiveDroplists();
  }

  public getInactiveDroplist(): Droplist {
    return this.droplistService.getInactiveDroplist();
  }

  public onAdd(): void {
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

  public onCampaignSelected(campaign: CampaignViewModel): void {
    this.currentCampaign = campaign;
    this.droplistService.switchCampaign(this.currentCampaign);
  }

  public onCampaignLoading(loading: boolean): void {
    this.loading = loading;
  }

  public onEject(item: DroplistItem, droplist: Droplist): void {
    this.droplistService.ejectItem(item, droplist);
  }
}
