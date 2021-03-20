import { Injectable } from '@angular/core';
import PlaylistStateModel from './playlist-state.model';
import PlaylistViewModel from './playlist.view-model';

@Injectable({ providedIn: 'root' })
export class PlaylistService {
  private playlistState: { [id: string]: PlaylistStateModel } = {};

  public getOrCreatePlaylistState(viewModel: PlaylistViewModel): PlaylistStateModel {
    if (!this.playlistState[viewModel.id]) {
      this.playlistState[viewModel.id] = new PlaylistStateModel(
        viewModel.songs.length, viewModel.loop, viewModel.shuffle, viewModel.replaceAll
      );
    }

    return this.playlistState[viewModel.id];
  }
}
