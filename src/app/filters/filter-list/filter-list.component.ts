import { Component, Input } from '@angular/core';
import { FilterViewModel } from '@app-filters/view-models';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.less']
})
export class FilterListComponent {
  @Input() filters!: Array<FilterViewModel>;
}
