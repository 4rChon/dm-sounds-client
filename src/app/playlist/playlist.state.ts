import { Item } from 'ytpl';
import { PlaylistModel } from "./playlist-item/playlist.model";

export default class PlaylistState {
  private currentId = 0;
  private history: Array<number> = [];
  private itemCount;

  constructor(private readonly model: PlaylistModel) {
    this.itemCount = this.model.items.length;
  }

  public setShuffle(value: boolean): void {
    this.model.shuffle = value;
  }

  public setLoop(value: boolean): void {
    this.model.loop = value;
  }

  public getNextId(): number {
    if (!this.hasNext()) {
      return -1;
    }

    this.history.push(this.currentId);

    if (this.currentId === this.itemCount - 1 && this.model.loop) {
      this.currentId = 0;
    } else {
      this.currentId = this.model.shuffle ? Math.floor(Math.random() * Math.floor(this.itemCount)) : this.currentId + 1;
    }

    return this.currentId;
  }

  public getPrevId(): number {
    if (this.hasPrev()) {
      this.currentId = this.history.pop() ?? 0;
    }
    return this.currentId;
  }

  public hasNext(): boolean {
    return this.currentId !== this.itemCount - 1 || this.model.loop || this.model.shuffle;
  }

  public hasPrev(): boolean {
    return this.history.length > 0;
  }

  public getCurrentItem(): Item {
    return this.model.items[this.currentId];
  }
}
