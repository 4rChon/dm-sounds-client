import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TooltipConstants } from 'src/app/common/tooltip.constants';

@Component({
  selector: 'app-loop-button-toggle',
  templateUrl: 'loop-button-toggle.component.html'
})

export class LoopButtonToggleComponent {
  @Output() value = new EventEmitter<boolean>();
  @Input() initialValue = false;

  public tooltipOn = TooltipConstants.LoopOn;
  public tooltipOff = TooltipConstants.LoopOff;
}
