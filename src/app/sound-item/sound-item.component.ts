import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'ytpl';
import PlaylistStateModel from '../playlist/playlist-state.model';

@Component({
  selector: 'app-sound-item',
  templateUrl: 'sound-item.component.html',
  styleUrls: ['sound-item.component.less']
})

export class SoundItemComponent implements OnInit {
  @Input() playlist!: PlaylistStateModel;
  @Input() index!: number;

  public item!: Item;

  ngOnInit(): void {
    this.item = this.playlist.items[this.index];
  }
}
