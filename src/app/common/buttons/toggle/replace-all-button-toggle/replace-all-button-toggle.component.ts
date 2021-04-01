import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TooltipConstants } from 'src/app/common/tooltip.constants';

@Component({
  selector: 'app-replace-all-button-toggle',
  templateUrl: 'replace-all-button-toggle.component.html'
})

export class ReplaceAllButtonToggleComponent {
  @Output() value = new EventEmitter<boolean>();
  @Input() initialValue = false;

  public tooltipOn = TooltipConstants.ReplaceAllOn;
  public tooltipOff = TooltipConstants.ReplaceAllOff;
}
