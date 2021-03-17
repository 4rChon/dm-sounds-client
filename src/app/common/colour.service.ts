import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ColourService {
  public RGBtoCSS(colour: any): string {
    const r = Math.floor(colour.r * 255);
    const g = Math.floor(colour.g * 255);
    const b = Math.floor(colour.b * 255);
    return `rgb(${r}, ${g}, ${b})`;
  }
}
