import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { FilterAPIService } from 'src/app/api-services/filter-api.service';
import { TooltipConstants } from 'src/app/common/tooltip.constants';
import { FilterViewModel } from '../view-models/filter.view-model';

@Component({
  selector: 'app-filters-form',
  templateUrl: 'filters-form.component.html',
  styleUrls: ['filters-form.component.less']
})
export class FiltersFormComponent {
  public filters: Array<FilterViewModel> = [];

  constructor(private readonly filterAPIService: FilterAPIService) {
    this.filterAPIService.getFilters().subscribe({
      next: filters => {
        return this.filters = filters;
      }
    });
  }

  public deleteFilter(index: number): void {
    this.filters.splice(index, 1);
  }

  public addFilter(filter: FilterViewModel): void {
    this.filters.push(filter);
  }

  public editFilter(index: number, filter: FilterViewModel): void {
    this.filters[index] = filter;
  }
}
