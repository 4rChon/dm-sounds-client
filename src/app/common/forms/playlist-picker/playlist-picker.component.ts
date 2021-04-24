import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlaylistAPIService } from '@app-api-services/playlist-api.service';
import { DroplistItemType } from '@app-droplists/droplist-item-type.enum';
import { DroplistItem } from '@app-droplists/droplist-item.interface';
import { PlaylistViewModel } from '@app-playlists/view-models';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-playlist-picker',
  templateUrl: 'playlist-picker.component.html',
})

export class PlaylistPickerComponent implements OnInit {
  public availablePlaylists: Array<DroplistItem> = [];
  public addedPlaylists: Array<DroplistItem> = [];
  public fetchingPlaylists = true;

  @Input() playlists: Array<PlaylistViewModel> = [];
  @Output() playlistsChange = new EventEmitter<Array<PlaylistViewModel>>();

  constructor(private readonly playlistAPIService: PlaylistAPIService) { }

  ngOnInit(): void {
    this.addedPlaylists = this.playlists.map(data => ({ type: DroplistItemType.Playlist, data }));

    this.playlistAPIService.getPlaylists()
      .pipe(finalize(() => this.fetchingPlaylists = false))
      .subscribe({
        next: filters => this.availablePlaylists = filters.map(data => ({ type: DroplistItemType.Playlist, data }))
      });
  }

  public onPlaylistsChange(droplistItems: Array<DroplistItem>): void {
    console.log(droplistItems);
    this.playlistsChange.emit(droplistItems.map(droplistItem => droplistItem.data as PlaylistViewModel));
  }
}
