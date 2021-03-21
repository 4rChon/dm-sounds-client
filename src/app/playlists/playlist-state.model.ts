export default class PlaylistStateModel {
  private _index = 0;
  private history: Array<number> = [];
  constructor(
    private songCount: number,
    public loop: boolean,
    public shuffle: boolean,
    public replaceAll: boolean) { }

  public set index(ix: number) {
    if (ix >= 0 && ix < this.songCount) {
      this._index = ix;
    }
  }

  public get index(): number {
    return this._index;
  }

  public get hasNextIndex(): boolean {
    return this._index !== this.songCount - 1 || this.loop || this.shuffle;
  }

  public get hasPrevIndex(): boolean {
    return this.history.length > 0;
  }

  public getNextIndex(): number {
    if (!this.hasNextIndex) {
      return -1;
    }

    this.history.push(this._index);

    if (this._index === this.songCount - 1 && this.loop) {
      this._index = 0;
    } else {
      this._index = this.shuffle ? Math.floor(Math.random() * Math.floor(this.songCount)) : this._index + 1;
    }

    return this._index;
  }

  public getPrevIndex(): number {
    if (this.hasPrevIndex) {
      this._index = this.history.pop() ?? 0;
    }

    return this._index;
  }
}
