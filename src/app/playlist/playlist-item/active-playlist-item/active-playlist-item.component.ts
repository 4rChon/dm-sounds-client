import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { APIService } from 'src/app/common/api.service';
import { IconService } from 'src/app/common/icon.service';
import { PlaylistService } from '../../playlist.service';
import PlaylistState from '../../playlist.state';

@Component({
  selector: 'app-active-playlist-item',
  templateUrl: 'active-playlist-item.component.html',
  styleUrls: ['../playlist-item.component.less']
})

export class ActivePlaylistItemComponent implements OnInit, AfterViewInit {
  @Input() playlist!: PlaylistState;

  public currentId = 0;
  public audioSourceUrl = '';
  public hasPrev = false;
  public hasNext = false;
  public ejecting = false;

  private audioElement!: HTMLAudioElement;

  @ViewChild('playlistAudio') audio!: ElementRef;

  constructor(
    private readonly iconService: IconService,
    public readonly apiService: APIService,
    private readonly playlistService: PlaylistService
  ) { }

  ngOnInit(): void {
    this.hasPrev = this.playlist.hasPrev();
    this.hasNext = this.playlist.hasNext();
    this.currentId = this.playlist.getCurrentItemId();
  }

  ngAfterViewInit(): void {
    this.audioElement = this.audio.nativeElement;
    this.audioElement.onended = this.next.bind(this);
    this.updateSrc();
  }

  public pause(): void {
    this.audioElement.pause();
  }

  public play(): void {
    this.audioElement.play();
  }

  public prev(): void {
    this.currentId = this.playlist.getPrevId();
    this.updateButtonState();
    this.updateSrc();
  }

  public eject(): void {
    this.fadeOut();
    this.ejecting = true;
  }

  private fadeOut(): void {
    if (this.audioElement.volume > 0.01) {
      this.audioElement.volume *= 0.9;
      setTimeout(() => { this.fadeOut(); }, 100);
    } else {
      this.playlistService.deactivatePlaylist(this.playlist);
    }
  }

  public next(): void {
    this.currentId = this.playlist.getNextId();
    console.log(this.currentId);
    this.updateButtonState();
    this.updateSrc();
  }

  public toggleShuffle(value: boolean): void {
    this.playlist.setShuffle(value);
    this.updateButtonState();
  }

  public toggleLoop(value: boolean): void {
    this.playlist.setLoop(value);
    this.updateButtonState();
  }

  private updateButtonState(): void {
    this.hasPrev = this.playlist.hasPrev();
    this.hasNext = this.playlist.hasNext();
  }

  private updateSrc(): void {
    this.pause();
    if (this.currentId >= 0) {
      this.audioElement.src = this.apiService.getAudioStreamUrl(this.playlist.model.items[this.currentId].id);
      this.play();
    }
  }
}
