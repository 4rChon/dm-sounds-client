import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { APIService } from '../common/api.service';
import { PlaylistModel } from './playlist-item/playlist.model';
import PlaylistState from './playlist.state';

@Injectable({ providedIn: 'root' })
export class PlaylistService implements OnDestroy {
  private playlistSubscription?: Subscription;
  private playlistModels: Array<PlaylistModel> = [];
  private inactivePlaylistStates = new Map<string, PlaylistState>();
  private activePlaylistStates = new Map<string, PlaylistState>();

  private getInactivePlaylistsSubject = new Subject<Array<PlaylistState>>();
  public getInactivePlaylistsAction$ = this.getInactivePlaylistsSubject.asObservable();

  private getActivePlaylistsSubject = new Subject<Array<PlaylistState>>();
  public getActivePlaylistsAction$ = this.getActivePlaylistsSubject.asObservable();

  constructor(private readonly apiService: APIService) {
    this.playlistSubscription = this.apiService.getPlaylists().subscribe(playlists => {
      this.playlistModels = playlists;
      this.playlistModels.forEach(playlist => {
        const state = new PlaylistState(playlist);
        this.inactivePlaylistStates.set(playlist.id, state);
      });
      this.getInactivePlaylistsSubject.next([...this.inactivePlaylistStates.values()]);
    });
  }

  public getNextPlaylists(): void {
    this.getActivePlaylistsSubject.next([...this.activePlaylistStates.values()]);
    this.getInactivePlaylistsSubject.next([...this.inactivePlaylistStates.values()]);
  }

  public deactivatePlaylist(playlist: PlaylistState): void {
    this.activePlaylistStates.delete(playlist.model.id);
    this.inactivePlaylistStates.set(playlist.model.id, playlist);

    this.getActivePlaylistsSubject.next([...this.activePlaylistStates.values()]);
    this.getInactivePlaylistsSubject.next([...this.inactivePlaylistStates.values()]);
  }

  public activatePlaylist(playlist: PlaylistState): void {
    this.inactivePlaylistStates.delete(playlist.model.id);
    this.activePlaylistStates.set(playlist.model.id, playlist);

    this.getActivePlaylistsSubject.next([...this.activePlaylistStates.values()]);
    this.getInactivePlaylistsSubject.next([...this.inactivePlaylistStates.values()]);
  }

  public updatePlaylistArrays(active: Array<PlaylistState>, inactive: Array<PlaylistState>): void {
    this.activePlaylistStates.clear();
    this.inactivePlaylistStates.clear();

    active.forEach(playlist => {
      this.activePlaylistStates.set(playlist.model.id, playlist);
    });
    inactive.forEach(playlist => {
      this.inactivePlaylistStates.set(playlist.model.id, playlist);
    });
  }

  ngOnDestroy(): void {
    this.playlistSubscription?.unsubscribe();
  }
}
