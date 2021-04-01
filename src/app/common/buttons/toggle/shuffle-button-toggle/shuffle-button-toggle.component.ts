import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TooltipConstants } from 'src/app/common/tooltip.constants';

@Component({
  selector: 'app-shuffle-button-toggle',
  templateUrl: 'shuffle-button-toggle.component.html'
})

export class ShuffleButtonToggleComponent {
  @Output() value = new EventEmitter<boolean>();
  @Input() initialValue = false;

  public tooltipOn = TooltipConstants.ShuffleOn;
  public tooltipOff = TooltipConstants.ShuffleOff;
}
