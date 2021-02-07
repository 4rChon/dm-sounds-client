import { Injectable } from '@angular/core';
import { Playlist } from './playlist';

@Injectable({ providedIn: 'root' })
export class PlaylistService {
  constructor() {}

  playlists: { [id: string]: Playlist } = {};

  public addPlaylist(playlist: Playlist): void {
    this.playlists[playlist.id] = playlist;
  }

  public removePlaylist(id: string): void {
    delete this.playlists[id];
  }

  public replacePlaylist(
    firstPlaylistId: string,
    secondPlaylist: Playlist
  ): void {
    this.removePlaylist(firstPlaylistId);
    this.addPlaylist(secondPlaylist);
  }
}
