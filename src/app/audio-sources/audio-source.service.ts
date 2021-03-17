import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';

@Injectable({ providedIn: 'root' })
export class AudioSourceService {
  private audioSources: { [id: string]: HTMLAudioElement } = {};

  constructor(private readonly apiService: APIService) { }

  public getOrCreateAudioSource(id: string): HTMLAudioElement {
    if (!this.audioSources[id]) {
      this.audioSources[id] = new Audio(this.apiService.getAudioStreamUrl(id));
    }

    return this.audioSources[id];
  }
}
