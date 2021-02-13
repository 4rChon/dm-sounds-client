import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { APIService } from '../../common/api.service';
import { PlaylistModel } from '../playlist-item/playlist.model';

@Component({
  selector: 'app-playlist-container',
  templateUrl: './playlist-container.component.html',
  styleUrls: ['./playlist-container.component.less'],
})
export class PlaylistContainerComponent implements OnInit, OnDestroy {
  activePlaylists: Array<PlaylistModel> = [];
  inactivePlaylists: Array<PlaylistModel> = [];

  private playlistSubscription?: Subscription;

  constructor(private readonly apiService: APIService) { }

  ngOnInit(): void {
    this.playlistSubscription = this.apiService.getPlaylists().subscribe(
      playlists => this.inactivePlaylists = playlists
    );
  }

  ngOnDestroy(): void {
    this.playlistSubscription?.unsubscribe();
  }

  drop(event: CdkDragDrop<PlaylistModel[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
