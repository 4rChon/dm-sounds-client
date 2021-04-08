import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { FilterAPIService } from 'src/app/api-services/filter-api.service';
import { TooltipConstants } from 'src/app/common/tooltip.constants';
import { FilterViewModel } from '../../filter.view-model';

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
      next: () => {
        this.add.emit();
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
