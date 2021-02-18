import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { APIService } from '../common/api.service';
import { PlaylistModel } from './playlist-item/playlist.model';
import PlaylistState from './playlist.state';

@Injectable({ providedIn: 'root' })
export class PlaylistService implements OnDestroy {
  private playlistSubscription?: Subscription;
  private playlistModels: Array<PlaylistModel> = [];
  private inactivePlaylists = new Map<string, PlaylistState>();
  private activePlaylists = new Map<string, PlaylistState>();

  private getInactivePlaylistsSubject = new Subject<Array<PlaylistState>>();
  public getInactivePlaylistsAction$ = this.getInactivePlaylistsSubject.asObservable();

  private getActivePlaylistsSubject = new Subject<Array<PlaylistState>>();
  public getActivePlaylistsAction$ = this.getActivePlaylistsSubject.asObservable();

  constructor(private readonly apiService: APIService) {
    this.playlistSubscription = this.apiService.getPlaylists().subscribe(playlists => {
      this.playlistModels = playlists;
      this.playlistModels.forEach(playlist => {
        const state = new PlaylistState(playlist);
        this.inactivePlaylists.set(playlist.id, state);
      });
      this.getInactivePlaylistsSubject.next([...this.inactivePlaylists.values()]);
    });
  }

  public isActive(id: string): boolean {
    return this.activePlaylists.has(id);
  }

  public getNextPlaylists(): void {
    this.getActivePlaylistsSubject.next([...this.activePlaylists.values()]);
    this.getInactivePlaylistsSubject.next([...this.inactivePlaylists.values()]);
  }

  public deactivatePlaylist(id: string): void {
    const playlist = this.activePlaylists.get(id);
    if (!playlist) {
      return;
    }

    this.activePlaylists.delete(id);
    this.inactivePlaylists.set(id, playlist);

    this.getActivePlaylistsSubject.next([...this.activePlaylists.values()]);
    this.getInactivePlaylistsSubject.next([...this.inactivePlaylists.values()]);
  }

  public activatePlaylist(id: string, replaceAll: boolean): void {
    const playlist = this.inactivePlaylists.get(id);

    if (!playlist) {
      return;
    }

    if (replaceAll) {
      this.activePlaylists.forEach((value, key) => {
        this.inactivePlaylists.set(key, value);
      });

      this.activePlaylists.clear();
    }

    this.inactivePlaylists.delete(id);
    this.activePlaylists.set(id, playlist);

    this.getActivePlaylistsSubject.next([...this.activePlaylists.values()]);
    this.getInactivePlaylistsSubject.next([...this.inactivePlaylists.values()]);
  }

  public updatePlaylistArrays(active: Array<PlaylistState>, inactive: Array<PlaylistState>): void {
    this.activePlaylists.clear();
    this.inactivePlaylists.clear();

    active.forEach(playlist => {
      this.activePlaylists.set(playlist.model.id, playlist);
    });
    inactive.forEach(playlist => {
      this.inactivePlaylists.set(playlist.model.id, playlist);
    });
  }

  ngOnDestroy(): void {
    this.playlistSubscription?.unsubscribe();
  }
}
