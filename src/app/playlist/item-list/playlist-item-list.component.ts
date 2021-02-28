import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-item-list',
  templateUrl: 'playlist-item-list.component.html'
})

export class PlaylistItemListComponent {
  @Input() items: any;
}
