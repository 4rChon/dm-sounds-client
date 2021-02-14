import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlaylistService } from '../playlist.service';
import PlaylistState from '../playlist.state';

@Component({
  selector: 'app-playlist-container',
  templateUrl: './playlist-container.component.html',
  styleUrls: ['./playlist-container.component.less'],
})
export class PlaylistContainerComponent implements OnInit, OnDestroy {
  activePlaylists: Array<PlaylistState> = [];
  inactivePlaylists: Array<PlaylistState> = [];

  getInactivePlaylistsSubscription!: Subscription;
  getActivePlaylistsSubscription!: Subscription;

  constructor(private readonly playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.getInactivePlaylistsSubscription = this.playlistService.getInactivePlaylistsAction$.subscribe(
      playlists => this.inactivePlaylists = playlists
    );

    this.getActivePlaylistsSubscription = this.playlistService.getActivePlaylistsAction$.subscribe(
      playlists => this.activePlaylists = playlists
    );
  }

  ngOnDestroy(): void {
    this.getInactivePlaylistsSubscription?.unsubscribe();
    this.getActivePlaylistsSubscription?.unsubscribe();
  }

  drop(event: CdkDragDrop<PlaylistState[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    this.playlistService.updatePlaylistArrays(this.activePlaylists, this.inactivePlaylists);
  }
}
