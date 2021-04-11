import { Injectable } from '@angular/core';
import { CampaignViewModel } from '@app-campaigns/view-models';
import { DroplistItemType } from './droplist-item-type.enum';
import { DroplistItem } from './droplist-item.interface';
import { Droplist } from './droplist.interface';

@Injectable({ providedIn: 'root' })
export class DroplistService {
  private droplists: Array<Droplist> = [
    { name: 'New Dock', items: [], active: true }
  ];

  private inactiveDroplist: Droplist = {
    name: 'Inactive', items: [], active: false
  };

  // these can be turned into subscription actions
  public editDroplist(index: number, name: string): void {
    this.droplists[index].name = name;
  }

  public removeDroplist(index: number): void {
    const removedDroplist = this.droplists.splice(index, 1)[0];
    this.inactiveDroplist.items = this.inactiveDroplist.items.concat(removedDroplist.items);
  }

  public addDroplist(name: string): void {
    this.droplists.push({ name, items: [], active: true });
  }

  public getDroplist(index: number): Droplist {
    return this.droplists[index];
  }

  public getActiveDroplists(): Array<Droplist> {
    return this.droplists;
  }

  public getInactiveDroplist(): Droplist {
    return this.inactiveDroplist;
  }

  public clearActiveDroplist(droplist: Droplist): void {
    this.inactiveDroplist.items = this.inactiveDroplist.items.concat(droplist.items);
    droplist.items = [];
  }

  public switchCampaign(campaign: CampaignViewModel): void {
    this.droplists.splice(0, this.droplists.length);
    this.droplists = [{ name: 'New Dock', items: [], active: true }];
    this.inactiveDroplist.items.splice(0, this.inactiveDroplist.items.length);

    campaign?.songs.forEach(song => {
      this.inactiveDroplist.items.push({
        type: DroplistItemType.Song, data: song
      });
    });

    campaign?.playlists.forEach(playlist => {
      this.inactiveDroplist.items.push({
        type: DroplistItemType.Playlist, data: playlist
      });
    });
  }

  public ejectItem(item: DroplistItem, droplist: Droplist): void {
    const index = droplist.items.indexOf(item);
    droplist.items.splice(index, 1);
    this.inactiveDroplist.items.push(item);
  }
}
