import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AudioSourceService } from '../audio-source.service';

@Component({
  selector: 'app-audio-source-container',
  templateUrl: './audio-source-container.component.html',
  styleUrls: ['./audio-source-container.component.less']
})
export class AudioSourceContainerComponent implements OnInit, OnDestroy {
  private audioElement!: HTMLAudioElement;

  @Input() id!: string;

  constructor(private readonly audioSourceService: AudioSourceService) { }

  ngOnInit(): void {
    this.audioElement = this.audioSourceService.getOrCreateAudioSource(this.id);
    this.audioElement.play();
  }

  ngOnDestroy(): void {
    this.audioElement.pause();
  }
}
