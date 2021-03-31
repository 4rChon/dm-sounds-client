import { BehaviorSubject } from 'rxjs';

export default class PlaylistStateModel {
  private _index = 0;
  private indexSubject = new BehaviorSubject<number>(this._index);
  private history: Array<number> = [];
  public index$ = this.indexSubject.asObservable();

  constructor(
    private songCount: number,
    public loop: boolean,
    public shuffle: boolean,
    public replaceAll: boolean) { }

  public set index(ix: number) {
    if (ix >= 0 && ix < this.songCount) {
      this._index = ix;
      this.indexSubject.next(this._index);
    }
  }

  public get hasNextIndex(): boolean {
    return this._index !== this.songCount - 1 || this.loop || this.shuffle;
  }

  public get hasPrevIndex(): boolean {
    return this.history.length > 0;
  }

  public getNextIndex(): void {
    if (!this.hasNextIndex) {
      return;
    }

    this.history.push(this._index);

    if (this._index === this.songCount - 1 && this.loop) {
      this._index = 0;
    } else {
      this._index = this.shuffle ? Math.floor(Math.random() * Math.floor(this.songCount)) : this._index + 1;
    }

    this.indexSubject.next(this._index);
  }

  public getPrevIndex(): void {
    if (this.hasPrevIndex) {
      this._index = this.history.pop() ?? 0;
      this.indexSubject.next(this._index);
    }
  }
}
