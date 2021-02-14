import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { APIService } from 'src/app/common/api.service';
import { IconService } from 'src/app/common/icon.service';
import { Item } from 'ytpl';
import PlaylistState from '../../playlist.state';
import { PlaylistModel } from '../playlist.model';

@Component({
  selector: 'app-active-playlist-item',
  templateUrl: 'active-playlist-item.component.html',
  styleUrls: ['../playlist-item.component.less']
})

export class ActivePlaylistItemComponent implements OnInit, AfterViewInit {
  @Input() playlist!: PlaylistModel;

  public currentId = 0;
  public audioSourceUrl = '';
  public hasPrev = false;
  public hasNext = false;
  public playlistState!: PlaylistState;

  private audioElement!: HTMLAudioElement;

  @ViewChild('playlistAudio') audio!: ElementRef;

  constructor(
    private readonly iconService: IconService,
    public readonly apiService: APIService,
  ) { }

  ngOnInit(): void {
    this.playlistState = new PlaylistState(this.playlist);
    this.hasPrev = this.playlistState.hasPrev();
    this.hasNext = this.playlistState.hasNext();
  }

  ngAfterViewInit(): void {
    this.audioElement = this.audio.nativeElement;
    this.play();
  }

  public prev(): void {
    this.currentId = this.playlistState.getPrevId();
    this.updateButtonState();
    this.play();
  }

  public next(): void {
    this.currentId = this.playlistState.getNextId();
    this.updateButtonState();
    this.play();
  }

  public toggleShuffle(value: boolean): void {
    this.playlistState.setShuffle(value);
  }

  public toggleLoop(value: boolean): void {
    this.playlistState.setLoop(value);
  }

  private updateButtonState(): void {
    this.hasPrev = this.playlistState.hasPrev();
    this.hasNext = this.playlistState.hasNext();
  }

  private play(): void {
    this.audioElement.pause();
    this.audioElement.src = this.apiService.getAudioStreamUrl(this.playlist.items[this.currentId].id);
    this.audioElement.play();
  }
}
