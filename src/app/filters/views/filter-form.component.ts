import { Component } from '@angular/core';
import { FilterAPIService } from '@app-common/api-services/filter-api.service';
import { FilterViewModel } from '@app-filters/view-models';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-filter-form',
  templateUrl: 'filter-form.component.html',
  styleUrls: ['filter-form.component.less']
})
export class FilterFormComponent {
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
