import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class StreamAPIService {
  constructor() { }

  public static getAudioStreamUrl(id: string): string {
    return `${environment.api}/streams/${id}`;
  }
}
