import { Component, Input, OnInit } from '@angular/core';
import PlaylistItemType from '../common/playlist-item-type.enum';
import IPlaylistItem from '../common/playlist-item.interface';
import PlaylistViewModel from '../common/view-models/playlist.view-model';
import SongViewModel from '../common/view-models/song.view-model';

@Component({
  selector: 'app-droplist',
  templateUrl: './droplist.component.html',
  styleUrls: ['./droplist.component.less']
})
export class DroplistComponent implements OnInit {
  @Input() item!: IPlaylistItem;
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
