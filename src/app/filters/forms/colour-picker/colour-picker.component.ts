import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColourService } from 'src/app/common/colour.service';

@Component({
  selector: 'app-colour-picker',
  templateUrl: 'colour-picker.component.html',
  styleUrls: ['colour-picker.component.less'],
  animations: [
    trigger('scaleAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('0.1s ease-out', style({ transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)' }),
        animate('0.1s ease-out', style({ transform: 'scale(0)' })),
      ]),
    ])
  ]
})

export class ColourPickerComponent {
  @Input() colour!: string;
  @Output() colourChange = new EventEmitter<string>();

  public readonly colourPalette = ColourService.orderedPalette;
  public show = false;

  public chooseColour(c: string): void {
    this.colourChange.emit(c);
    this.show = false;
  }
}
