import { Component, Input } from '@angular/core';
import { FilterViewModel } from '../filter.view-model';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.less']
})
export class FilterListComponent {
  @Input() filters!: Array<FilterViewModel>;
}
