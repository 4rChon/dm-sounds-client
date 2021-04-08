import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { FilterAPIService } from 'src/app/api-services/filter-api.service';
import { TooltipConstants } from 'src/app/common/tooltip.constants';
import { FilterViewModel } from '../filter.view-model';

@Component({
  selector: 'app-filters-form',
  templateUrl: 'filters-form.component.html',
  styleUrls: ['filters-form.component.less']
})
export class FiltersFormComponent {
  public filters: Array<FilterViewModel> = [];

  constructor(private readonly filterAPIService: FilterAPIService) {
    this.getFilters();
  }

  public deleteFilter(index: number): void {
    this.filters.splice(index, 1);
  }

  public getFilters(): void {
    this.filterAPIService.getFilters().subscribe({
      next: filters =>
        this.filters = filters
    });
  }

  public addFilter(filter: FilterViewModel): void {
    this.filters.push(filter);
  }
}
