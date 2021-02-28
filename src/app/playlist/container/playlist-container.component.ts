import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AddPlaylistComponent } from '../add/add-playlist.component';
import PlaylistStateModel from '../playlist-state.model';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-playlist-container',
  templateUrl: './playlist-container.component.html',
  styleUrls: ['./playlist-container.component.less'],
})
export class PlaylistContainerComponent implements OnInit, OnDestroy {
  activePlaylists: Array<PlaylistStateModel> = [];
  inactivePlaylists: Array<PlaylistStateModel> = [];

  getInactivePlaylistsSubscription!: Subscription;
  getActivePlaylistsSubscription!: Subscription;
  errorSubscription!: Subscription;

  public fetching = true;
  public canDragDrop = false;

  constructor(
    private readonly playlistService: PlaylistService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getInactivePlaylistsSubscription = this.playlistService.getInactivePlaylistsAction$.subscribe(
      playlists => this.inactivePlaylists = playlists
    );

    this.getActivePlaylistsSubscription = this.playlistService.getActivePlaylistsAction$.subscribe(
      playlists => this.activePlaylists = playlists
    );

    this.playlistService.isFetchingAction$.subscribe(
      fetching => this.fetching = fetching
    );

    this.errorSubscription = this.playlistService.errorAction$.subscribe(
      (error) => {
        console.error(error);
      }
    );

    this.playlistService.getNextPlaylists();
  }

  ngOnDestroy(): void {
    this.getInactivePlaylistsSubscription?.unsubscribe();
    this.getActivePlaylistsSubscription?.unsubscribe();
    this.errorSubscription?.unsubscribe();
  }

  public setDragDrop(value: boolean): void {
    this.canDragDrop = value;
  }

  public openDialog(): void {
    this.dialog.open(AddPlaylistComponent);
  }

  public drop(event: CdkDragDrop<PlaylistStateModel[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const playlist = event.previousContainer.data[event.previousIndex];
      if (playlist.replaceAll && !this.playlistService.isActive(playlist.id)) {
        this.playlistService.activatePlaylist(playlist.id, playlist.replaceAll);

        return;
      }
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    this.playlistService.updatePlaylistArrays(this.activePlaylists, this.inactivePlaylists);
  }
}
