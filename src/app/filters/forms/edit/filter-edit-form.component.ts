import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FilterAPIService } from 'src/app/api-services/filter-api.service';
import { TooltipConstants } from 'src/app/common/tooltip.constants';
import { FilterViewModel } from '../../filter.view-model';
import { FilterEditFormModel } from './filter-edit-form.model';

@Component({
  selector: 'app-filter-edit-form',
  templateUrl: 'filter-edit-form.component.html',
  styleUrls: ['../filters-form.component.less']
})

export class FilterEditFormComponent implements OnInit, OnDestroy {
  @Input() filter!: FilterViewModel;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  public readonly deleteTooltip = TooltipConstants.DeleteFilter;
  public readonly submitTooltip = TooltipConstants.SubmitFilter;
  public filterForm!: FormGroup;
  public changed = false;

  get name(): AbstractControl | null {
    return this.filterForm.get('name');
  }
  get colour(): AbstractControl | null {
    return this.filterForm.get('colour');
  }

  private formChangeSubscription!: Subscription;

  constructor(private readonly filterAPIService: FilterAPIService) { }

  public ngOnInit(): void {
    this.filterForm = new FormGroup({
      name: new FormControl(this.filter.name, [Validators.required]),
      colour: new FormControl(this.filter.colour)
    });

    this.formChangeSubscription = this.filterForm.valueChanges.subscribe({
      next: () => {
        this.changed = this.name?.value !== this.filter.name || this.colour?.value !== this.filter.colour;
      }
    });
  }

  public ngOnDestroy(): void {
    this.formChangeSubscription?.unsubscribe();
  }

  public deleteFilter(): void {
    this.filterAPIService.deleteFilter(this.filter.id).subscribe({
      next: () => {
        this.delete.emit();
      }
    });
  }

  public editFilter(): void {
    const model: FilterEditFormModel = {
      id: this.filter.id,
      name: this.name?.value,
      colour: this.colour?.value
    };

    this.filterAPIService.editFilter(model).subscribe({
      next: () => {
        this.edit.emit();
      }
    });
  }
}
