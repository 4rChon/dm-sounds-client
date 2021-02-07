import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: 'audio.component.html',
})
export class AudioComponent {
  @Input() audioSrc?: string;
  @Input() loop?: boolean;
}
