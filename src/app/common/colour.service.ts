import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ColourService {
  public static palette = {
    black: '#000',
    white: '#fff',
    red_berry: '#cc4125',
    red: '#e06666',
    orange: '#f6b26b',
    yellow: '#ffd966',
    green: '#93c47d',
    cyan: '#76a5af',
    cornflower_blue: '#6d9eeb',
    blue: '#6fa8dc',
    purple: '#8e7cc3',
    magenta: '#c27ba0'
  };

  public static orderedPalette = [
    '#000',
    '#fff',
    '#cc4125',
    '#e06666',
    '#f6b26b',
    '#ffd966',
    '#93c47d',
    '#76a5af',
    '#6d9eeb',
    '#6fa8dc',
    '#8e7cc3',
    '#c27ba0'
  ];

  private static WHITE: { r: 1, g: 1, b: 1 };

  public static RGBtoCSS(colour: any): string {
    const r = Math.floor(colour.r * 255);
    const g = Math.floor(colour.g * 255);
    const b = Math.floor(colour.b * 255);
    return `rgb(${r}, ${g}, ${b})`;
  }

  public static HEXtoRGB(hex: string): any {
    if (hex.length !== 4 && hex.length !== 7) {
      return this.WHITE;
    }

    if (hex[0] !== '#') {
      return this.WHITE;
    }

    if (hex.length === 4) {
      return {
        r: parseInt(`0x${hex[1]}`, 16) / 255,
        g: parseInt(`0x${hex[2]}`, 16) / 255,
        b: parseInt(`0x${hex[3]}`, 16) / 255
      };
    }

    if (hex.length === 7) {
      return {
        r: parseInt(`0x${hex[1]}${hex[2]}`, 16) / 255,
        g: parseInt(`0x${hex[3]}${hex[4]}`, 16) / 255,
        b: parseInt(`0x${hex[5]}${hex[6]}`, 16) / 255
      };
    }
  }

  public static RGBtoHEX(color: any): string {
    color.r = Math.floor(color.r * 255);
    color.g = Math.floor(color.g * 255);
    color.b = Math.floor(color.b * 255);
    return `#${color.r.toString(16)}${color.g.toString(16)}${color.b.toString(16)}`;
  }
}
