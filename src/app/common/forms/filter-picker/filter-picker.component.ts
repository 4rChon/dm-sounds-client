import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterAPIService } from '@app-api-services/filter-api.service';
import { DroplistItemType } from '@app-droplists/droplist-item-type.enum';
import { DroplistItem } from '@app-droplists/droplist-item.interface';
import { FilterViewModel } from '@app-filters/view-models';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-filter-picker',
  templateUrl: 'filter-picker.component.html',
})

export class FilterPickerComponent implements OnInit {
  public availableFilters: Array<DroplistItem> = [];
  public fetchingFilters = true;

  @Output() filtersChange = new EventEmitter<Array<FilterViewModel>>();

  constructor(private readonly filterAPIService: FilterAPIService) { }

  ngOnInit(): void {
    this.filterAPIService.getFilters()
      .pipe(finalize(() => this.fetchingFilters = false))
      .subscribe({
        next: filters => this.availableFilters = filters.map(data => ({ type: DroplistItemType.Song, data }))
      });
  }

  public onFiltersChange(droplistItems: Array<DroplistItem>): void {
    this.filtersChange.emit(droplistItems.map(droplistItem => droplistItem.data));
  }
}
