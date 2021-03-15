import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import PlaylistItemType from '../common/playlist-item-type.enum';
import IPlaylistItem from '../common/playlist-item.interface';
import CampaignViewModel from '../common/view-models/campaign.view-model';

@Component({
  selector: 'app-droplist-container',
  templateUrl: 'droplist-container.component.html',
  styleUrls: ['droplist-container.component.less']
})

export class DroplistContainerComponent {
  public inactiveDroplist: Array<IPlaylistItem> = [];
  public activeDroplists = [];
  public currentCampaign?: CampaignViewModel;
  public loading = false;

  public drop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      console.log(event.container);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.container);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  public onCampaignSelected(campaign: CampaignViewModel): void {
    this.currentCampaign = campaign;
    this.currentCampaign.playlists.forEach(playlist => {
      this.inactiveDroplist.push({
        type: PlaylistItemType.Playlist, data: playlist
      });
    });

    this.currentCampaign.songs.forEach(song => {
      this.inactiveDroplist.push({
        type: PlaylistItemType.Song, data: song
      });
    });
  }

  public onCampaignLoading(loading: boolean): void {
    this.loading = loading;
  }
}
