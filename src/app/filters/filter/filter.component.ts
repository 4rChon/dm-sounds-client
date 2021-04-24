import { Component, Input, OnInit } from '@angular/core';
import { FilterViewModel } from '@app-filters/view-models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {
  public colour!: string;
  @Input() filter!: FilterViewModel;

  public ngOnInit(): void {
    this.colour = this.filter.colour;
  }
}
