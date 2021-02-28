import { Component, Input } from '@angular/core';
import { PlaylistService } from '../../playlist.service';

@Component({
  selector: 'app-eject',
  templateUrl: 'eject.component.html'
})

export class EjectComponent {
  @Input() playlistId!: string;
  @Input() audioElement!: HTMLAudioElement;

  public ejecting = false;

  constructor(private readonly playlistService: PlaylistService) { }

  public eject(): void {
    this.fadeOut();
    this.ejecting = true;
  }

  private fadeOut(): void {
    if (this.audioElement.volume > 0.01) {
      this.audioElement.volume *= 0.9;
      setTimeout(() => { this.fadeOut(); }, 100);
    } else {
      this.playlistService.deactivatePlaylist(this.playlistId);
    }
  }
}
