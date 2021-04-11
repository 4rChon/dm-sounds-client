import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { FilterAPIService } from '@app-api-services/filter-api.service';
import { FilterViewModel } from '@app-filters/view-models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-picker',
  templateUrl: 'filter-picker.component.html',
  styleUrls: ['filter-picker.component.less']
})

export class FilterPickerComponent implements OnDestroy {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filterCtrl = new FormControl();
  filteredFilters: Array<FilterViewModel> = [];
  allFilters: Array<FilterViewModel> = [];

  private filterSubscription!: Subscription;

  @Input() filters: Array<FilterViewModel> = [];
  @Output() filtersChange = new EventEmitter<Array<FilterViewModel>>();

  @ViewChild('filterInput') filterInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;

  constructor(private readonly filterAPIService: FilterAPIService) {
    this.filterAPIService.getFilters().subscribe({
      next: (filters) => this.allFilters = filters
    });

    this.filterSubscription = this.filterCtrl.valueChanges.subscribe({
      next: (value) => {
        console.log(value);
        if (typeof value === 'string') {
          this.filteredFilters = this._filter(value);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.filterSubscription?.unsubscribe();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim() && this.filteredFilters.length > 0) {
      this.filters.push(this.filteredFilters[0]);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.filterCtrl.setValue(null);
  }

  remove(filter: FilterViewModel): void {
    const index = this.filters.indexOf(filter);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.filters.push(event.option.value);
    this.filterInput.nativeElement.value = '';
    this.filterCtrl.setValue(null);
    this.filtersChange.emit(this.filters);
  }

  private _filter(value: string): FilterViewModel[] {
    const filterValue = value.toLowerCase();

    return this.allFilters.filter(filter => {
      return filter.name.toLowerCase().indexOf(filterValue) === 0;
    }).filter(filter => {
      return !this.filters.includes(filter);
    });
  }
}
