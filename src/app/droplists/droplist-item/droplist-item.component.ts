import { Component, Input, OnInit } from '@angular/core';
import PlaylistItemType from '../../playlists/playlist-item-type.enum';
import IPlaylistItem from '../../playlists/playlist-item.interface';
import PlaylistViewModel from '../../playlists/playlist.view-model';
import SongViewModel from '../../songs/song.view-model';

@Component({
  selector: 'app-droplist-item',
  templateUrl: './droplist-item.component.html',
  styleUrls: ['./droplist-item.component.less']
})
export class DroplistComponent implements OnInit {
  @Input() item!: IPlaylistItem;
  @Input() active!: boolean;
  public song?: SongViewModel;
  public playlist?: PlaylistViewModel;

  public ngOnInit(): void {
    switch (this.item.type) {
      case PlaylistItemType.Playlist:
        this.playlist = this.item.data as PlaylistViewModel;
        break;
      case PlaylistItemType.Song:
        this.song = this.item.data as SongViewModel;
        break;
    }
  }
}
