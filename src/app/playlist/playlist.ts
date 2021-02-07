import { Item } from 'ytpl';
import { LoopType } from '../common/loop.enum';
import { YTDLService } from '../common/ytdl.service';
import { PlaylistModel } from './playlist.model';

export class Playlist implements PlaylistModel {
  private currentIndex = 0;
  private history: Array<number> = [];
  public readonly id: string;
  public readonly items: Array<Item>;
  public readonly title: string;
  public readonly bestThumbnail: any;

  private audioContext: AudioContext;
  private audioSource: AudioBufferSourceNode;

  constructor(
    model: PlaylistModel,
    private ytdlService: YTDLService,
    public autoplay: boolean = false,
    public shuffle: boolean = false,
    public loop: LoopType = LoopType.NONE
  ) {
    this.id = model.id;
    this.items = model.items;
    this.title = model.title;
    this.audioContext = new AudioContext();
    this.audioSource = this.audioContext.createBufferSource();

    if (autoplay) {
      this.play();
    }
  }

  public setShuffle(shuffle: boolean): void {
    console.log(`shuffle: ${shuffle}`);
    this.shuffle = shuffle;
  }

  public setLoop(loop: LoopType): void {
    console.log(loop);
    this.loop = loop;
  }

  public play(index?: number): void {
    if (index === undefined) {
      console.log(`playing ${this.currentIndex}`);
      this.streamAudio(this.items[this.currentIndex].id);
      return;
    }

    if (index < 0 || index >= this.items.length) {
      return;
    }

    const itemId = this.items[index].id;
    this.streamAudio(itemId);
  }

  public stop(): void {
    if (this.audioContext.state === 'running') {
      this.audioSource.stop();
      this.audioContext.close();
    }
    console.log('stopping');
  }

  public next(): void {
    console.log('next');
    this.stop();
    if (this.currentIndex > -1 && this.currentIndex < this.items.length) {
      this.history.push(this.currentIndex);
    }

    this.currentIndex = this.getNextIndex();
    this.play(this.currentIndex);
  }
  public prev(): void {
    console.log('prev');
    this.stop();
    if (this.history.length > 0) {
      this.currentIndex = this.history.pop() as number;
      this.play(this.currentIndex);
    }
  }

  public getCurrentAudioId(): string {
    if (this.currentIndex >= 0 && this.currentIndex < this.items.length) {
      return this.items[this.currentIndex].id;
    }
    return '';
  }

  private streamAudio(id: string): void {
    this.ytdlService.getAudioStream(id).subscribe((stream) => {
      this.audioContext
        .decodeAudioData(stream)
        .then((value) => {
          this.audioSource.buffer = value;
          this.audioSource.connect(this.audioContext.destination);
          this.audioSource.start();
          this.audioSource.loop = this.loop === LoopType.SINGLE;
          console.log(`playing ${id}`);
        })
        .catch((err) => console.log(err));
    });
  }

  private getNextIndex(): number {
    if (this.loop === LoopType.SINGLE) {
      return this.currentIndex;
    }

    if (this.shuffle) {
      return Math.floor(Math.random() * Math.floor(this.items.length));
    } else {
      if (this.currentIndex === this.items.length - 1) {
        if (this.loop === LoopType.ALL) {
          return 0;
        }
        return -1;
      }
      return this.currentIndex + 1;
    }
  }
}
