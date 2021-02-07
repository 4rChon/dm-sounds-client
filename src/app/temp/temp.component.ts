import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from 'ytpl';
import { YTPLService } from '../common/ytpl.service';

@Component({
  selector: 'app-temp',
  templateUrl: 'temp.component.html',
})
export class TempComponent {
  constructor() {}

  playlists: Array<string> = [];
  playlistId = new FormControl('');
  audioIds = new Set<string>();

  playlistItems = new Array<Item>();
  playlistIndex = -1;
  currentItemId = '';

  public addAudioStream(audioId: string): void {
    this.audioIds.add(audioId);
  }

  public removeAudioStream(audioId: string): void {
    this.audioIds.delete(audioId);
  }

  public onSubmit(): void {
    this.playlists.push(this.playlistId.value);
  }
  // public onSubmit(): void {
  //   this.ytplService
  //     .getPlaylistItems(this.playlistId.value)
  //     .subscribe((data) => {
  //       this.playlistItems = data;
  //       this.playlistIndex = 0;
  //       this.playSong(this.playlistIndex);
  //     });
  // }

  public playSong(index: number): void {
    const item = this.playlistItems[index];
    if (this.currentItemId !== '') {
      this.removeAudioStream(this.currentItemId);
    }
    this.audioIds.add(item.id);
    this.currentItemId = item.id;
  }

  public nextSong(): void {
    this.playSong(++this.playlistIndex);
  }

  public prevSong(): void {
    this.playSong(--this.playlistIndex);
  }
}
