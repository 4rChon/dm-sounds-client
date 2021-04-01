import { Injectable } from '@angular/core';
import { SongStateModel } from './song-state.model';
import { SongViewModel } from './song.view-model';

@Injectable({ providedIn: 'root' })
export class SongService {
  private songState: { [id: string]: SongStateModel } = {};

  public getOrCreateSongState(viewModel: SongViewModel): SongStateModel {
    if (!this.songState[viewModel.id]) {
      this.songState[viewModel.id] = new SongStateModel(
        viewModel.loop, viewModel.replaceAll
      );
    }

    return this.songState[viewModel.id];
  }
}
