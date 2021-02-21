import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { APIService } from '../common/api.service';
import { PlaylistModel } from '../common/models/playlist.model';
import PlaylistStateModel from './playlist-state.model';

@Injectable({ providedIn: 'root' })
export class PlaylistService {
  private playlistModels: Array<PlaylistModel> = [];
  private inactivePlaylists = new Map<string, PlaylistStateModel>();
  private activePlaylists = new Map<string, PlaylistStateModel>();

  private getInactivePlaylistsSubject = new Subject<Array<PlaylistStateModel>>();
  public getInactivePlaylistsAction$ = this.getInactivePlaylistsSubject.asObservable();

  private getActivePlaylistsSubject = new Subject<Array<PlaylistStateModel>>();
  public getActivePlaylistsAction$ = this.getActivePlaylistsSubject.asObservable();

  public isFetchingAction$!: Observable<boolean>;

  private errorSubject = new Subject();
  public errorAction$ = this.errorSubject.asObservable();

  constructor(private readonly apiService: APIService) {
    this.fetchPlaylists();
  }

  public fetchPlaylists(): void {
    const isFetchingSubject = new Subject<boolean>();
    this.isFetchingAction$ = isFetchingSubject.asObservable();

    isFetchingSubject.next(true);
    this.apiService.getPlaylists().then(playlists => {
      this.playlistModels = playlists;
      this.playlistModels.forEach(playlist => {
        const state = new PlaylistStateModel(playlist);
        this.inactivePlaylists.set(playlist.id, state);
      });
      this.getInactivePlaylistsSubject.next([...this.inactivePlaylists.values()]);
      isFetchingSubject.next(false);
      isFetchingSubject.complete();
    }).catch(error => {
      isFetchingSubject.next(false);
      isFetchingSubject.complete();
      this.errorSubject.next(error);
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

  public updatePlaylistArrays(active: Array<PlaylistStateModel>, inactive: Array<PlaylistStateModel>): void {
    this.activePlaylists.clear();
    this.inactivePlaylists.clear();

    active.forEach(playlist => {
      this.activePlaylists.set(playlist.id, playlist);
    });
    inactive.forEach(playlist => {
      this.inactivePlaylists.set(playlist.id, playlist);
    });
  }
}
