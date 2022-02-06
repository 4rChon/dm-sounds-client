import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AudioSourceService } from '@app-common/audio-sources/audio-source.service';
import { DroplistItemType } from '@app-droplists/droplist-item-type.enum';
import { DroplistItem } from '@app-droplists/droplist-item.interface';
import { PlaylistViewModel } from '@app-playlists/view-models';
import { SongViewModel } from '@app-songs/view-models';

@Component({
  selector: 'app-droplist-item',
  templateUrl: './droplist-item.component.html',
  styleUrls: ['./droplist-item.component.less']
})
export class DroplistComponent implements OnInit {
  @Input() item!: DroplistItem;
  @Input() active!: boolean;
  @Output() eject = new EventEmitter();
  public song?: SongViewModel;
  public playlist?: PlaylistViewModel;

  constructor(private readonly audioSourceService: AudioSourceService) { }

  public ngOnInit(): void {
    switch (this.item.type) {
      case DroplistItemType.Playlist:
        this.playlist = this.item.data as PlaylistViewModel;
        break;
      case DroplistItemType.Song:
        this.song = this.item.data as SongViewModel;
        break;
    }
  }

  public onEject(id: string): void {
    this.audioSourceService.ejectAudioSource(id).then(() =>
      this.eject.emit()
    );
  }
}
