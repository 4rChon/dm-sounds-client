import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: 'toggle-button.component.html'
})

export class ToggleButtonComponent implements OnInit {
  @Output() value = new EventEmitter<boolean>();
  @Input() initialValue = false;
  @Input() icon = '';

  public currentValue = false;

  ngOnInit(): void {
    this.currentValue = this.initialValue;
  }

  toggleValue(): void {
    this.currentValue = !this.currentValue;
    this.value.emit(this.currentValue);
  }
}
