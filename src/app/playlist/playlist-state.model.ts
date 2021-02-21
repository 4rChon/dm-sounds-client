import { Item } from 'ytpl';
import { PlaylistModel } from '../common/models/playlist.model';

export default class PlaylistStateModel {
  private currentId = 0;
  private history: Array<number> = [];
  private itemCount;

  public id: string;
  public title: string;
  public thumbnail: string;
  public items: Array<Item>;
  public loop: boolean;
  public shuffle: boolean;
  public replaceAll: boolean;

  constructor(model: PlaylistModel) {
    this.id = model.id;
    this.title = model.title;
    this.thumbnail = model.bestThumbnail.url || '';
    this.items = model.items;
    this.itemCount = model.items.length;
    this.loop = model.loop;
    this.shuffle = model.shuffle;
    this.replaceAll = model.replaceAll;
  }

  public nextId(): number {
    if (!this.hasNext) {
      return -1;
    }

    this.history.push(this.currentId);

    if (this.currentId === this.itemCount - 1 && this.loop) {
      this.currentId = 0;
    } else {
      this.currentId = this.shuffle ? Math.floor(Math.random() * Math.floor(this.itemCount)) : this.currentId + 1;
    }

    return this.currentId;
  }

  public prevId(): number {
    if (this.hasPrev) {
      this.currentId = this.history.pop() ?? 0;
    }
    return this.currentId;
  }

  public get hasNext(): boolean {
    return this.currentId !== this.itemCount - 1 || this.loop || this.shuffle;
  }

  public get hasPrev(): boolean {
    return this.history.length > 0;
  }

  public get currentItemId(): number {
    return this.currentId;
  }

  public get currentItem(): Item {
    return this.items[this.currentId];
  }
}
