import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { APIService } from 'src/app/common/api.service';
import PlaylistStateModel from '../../playlist-state.model';
import { PlaylistService } from '../../playlist.service';

@Component({
  selector: 'app-active-playlist-item',
  templateUrl: 'active-playlist-item.component.html',
  styleUrls: ['../playlist-item.component.less']
})

export class ActivePlaylistItemComponent implements AfterViewInit {
  @Input() playlist!: PlaylistStateModel;
  @Output() volumeEnterHover = new EventEmitter<any>();
  @Output() volumeLeaveHover = new EventEmitter<any>();

  public ejecting = false;
  public audioElement!: HTMLAudioElement;
  public audioElementInit = false;

  @ViewChild('playlistAudio') audio!: ElementRef;

  constructor(
    public readonly apiService: APIService,
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.audioElementInit = true;
      this.audioElement = this.audio.nativeElement;
      this.audioElement.onended = this.updateSrc.bind(this, this.playlist.currentItemId);
      this.updateSrc(this.playlist.currentItemId);
    });
  }


  public updateSrc(index: number): void {
    this.audioElement.pause();
    if (index >= 0) {
      this.audioElement.src = this.apiService.getAudioStreamUrl(this.playlist.items[index].id);
      this.audioElement.play();
    }
  }
}
