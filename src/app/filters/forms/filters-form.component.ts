import { Component } from '@angular/core';
import { FilterViewModel } from '@app-filters/view-models';
import { finalize } from 'rxjs/operators';
import { FilterAPIService } from 'src/app/api-services/filter-api.service';

@Component({
  selector: 'app-filters-form',
  templateUrl: 'filters-form.component.html',
  styleUrls: ['filters-form.component.less']
})
export class FiltersFormComponent {
  public filters: Array<FilterViewModel> = [];

  public fetching = true;

  constructor(private readonly filterAPIService: FilterAPIService) {
    this.filterAPIService.getFilters()
      .pipe(finalize(() => this.fetching = false))
      .subscribe({
        next: filters => this.filters = filters
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
