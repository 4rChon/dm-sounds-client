import { Injectable } from '@angular/core';
import CampaignViewModel from '../campaigns/campaign.view-model';
import DroplistItemType from '../playlists/playlist-item-type.enum';
import PlaylistViewModel from '../playlists/playlist.view-model';
import SongViewModel from '../songs/song.view-model';
import DroplistItem from './droplist-item.interface';
import Droplist from './droplist.interface';

@Injectable({ providedIn: 'root' })
export class DroplistService {
  private droplists: Array<Droplist> = [
    { name: 'Dock 1', items: [] }
  ];

  private inactiveDroplist: Array<DroplistItem> = [];

  // these can be turned into subscription actions
  public editDroplist(index: number, name: string): void {
    this.droplists[index].name = name;
  }

  public removeDroplist(index: number): void {
    const removedDroplist = this.droplists.splice(index, 1)[0];
    this.inactiveDroplist = this.inactiveDroplist.concat(removedDroplist.items);
  }

  public addDroplist(name: string): void {
    this.droplists.push({ name, items: [] });
  }

  public getDroplist(index: number): Droplist {
    return this.droplists[index];
  }

  public getActiveDroplists(): Array<Droplist> {
    return this.droplists;
  }

  public getInactiveDroplist(): Array<DroplistItem> {
    return this.inactiveDroplist;
  }

  public switchCampaign(campaign: CampaignViewModel): void {
    this.droplists.splice(0, this.droplists.length);
    this.droplists = [{ name: 'Dock 1', items: [] }];
    this.inactiveDroplist.splice(0, this.inactiveDroplist.length);

    campaign.songs.forEach(song => {
      this.inactiveDroplist.push({
        type: DroplistItemType.Song, data: song
      });
    });

    campaign.playlists.forEach(playlist => {
      this.inactiveDroplist.push({
        type: DroplistItemType.Playlist, data: playlist
      });
    });
  }
}
