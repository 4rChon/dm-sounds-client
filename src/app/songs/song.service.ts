import { Injectable } from '@angular/core';
import { SongViewModel } from '@app-songs/view-models';
import { SongStateModel } from './song-state.model';

@Injectable({ providedIn: 'root' })
export class SongService {
  private songState: { [id: string]: SongStateModel } = {};

  public getOrCreateSongState(viewModel: SongViewModel): SongStateModel {
    if (!this.songState[viewModel._id]) {
      this.songState[viewModel._id] = new SongStateModel(
        viewModel.loop, viewModel.replaceAll
      );
    }

    return this.songState[viewModel._id];
  }
}
