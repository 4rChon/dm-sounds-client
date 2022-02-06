import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { FilterAPIService } from '@app-common/api-services/filter-api.service';
import { TooltipConstants } from '@app-common/tooltip.constants';
import { FilterViewModel } from '@app-filters/view-models';

@Component({
  selector: 'app-filter-create-form',
  templateUrl: 'filter-create-form.component.html',
  styleUrls: ['../filters-form.component.less']
})

export class FilterCreateFormComponent {
  @Output() add = new EventEmitter<FilterViewModel>();

  public readonly addTooltip = TooltipConstants.AddFilter;
  public filterForm: FormGroup;

  get name(): AbstractControl | null {
    return this.filterForm.get('name');
  }
  get colour(): AbstractControl | null {
    return this.filterForm.get('colour');
  }

  constructor(private readonly filterAPIService: FilterAPIService) {
    this.filterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      colour: new FormControl('#fff')
    });
  }

  public addFilter(): void {
    this.filterAPIService.addFilter(this.filterForm.value).subscribe({
      next: (filter) => {
        this.add.emit(filter);
        this.filterForm.reset();
      }
    });
  }

  public setColour(colour: string): void {
    if (this.colour) {
      this.colour.setValue(colour);
    }
  }
}
