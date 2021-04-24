import { Injectable } from '@angular/core';
import { PlaylistViewModel } from '@app-playlists/view-models';
import { PlaylistStateModel } from './playlist-state.model';

@Injectable({ providedIn: 'root' })
export class PlaylistService {
  private playlistState: { [id: string]: PlaylistStateModel } = {};

  public getOrCreatePlaylistState(viewModel: PlaylistViewModel): PlaylistStateModel {
    if (!this.playlistState[viewModel._id]) {
      this.playlistState[viewModel._id] = new PlaylistStateModel(
        viewModel.songs.length, viewModel.loop, viewModel.shuffle, viewModel.replaceAll
      );
    }

    return this.playlistState[viewModel._id];
  }
}
