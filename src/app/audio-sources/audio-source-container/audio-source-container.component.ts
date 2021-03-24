import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { AudioSourceService } from '../audio-source.service';

@Component({
  selector: 'app-audio-source-container',
  templateUrl: './audio-source-container.component.html',
  styleUrls: ['./audio-source-container.component.less']
})
export class AudioSourceContainerComponent implements OnInit, OnDestroy, OnChanges {
  private audioElement!: HTMLAudioElement;
  @Input() id!: string;
  @Input() loop!: boolean;
  @Output() audioEnd = new EventEmitter();

  constructor(private readonly audioSourceService: AudioSourceService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.loop && this.audioElement) {
      this.audioElement.loop = changes.loop.currentValue;
    }
  }

  ngOnInit(): void {
    this.audioElement = this.audioSourceService.getOrCreateAudioSource(this.id);
    this.audioElement.loop = this.loop;
    this.audioElement.volume = 1;
    this.audioElement.onended = this.onAudioEnd.bind(this);
    this.audioElement.play();
  }

  ngOnDestroy(): void {
    this.audioElement.pause();
    this.audioElement.load();
  }

  private onAudioEnd(): void {
    if (!this.audioElement.loop) {
      this.audioElement.currentTime = 0;
      this.audioElement.pause();
    }
    this.audioEnd.emit();
  }
}
