import { Component, Input, OnInit } from '@angular/core';
import { ColourService } from '../../common/colour.service';
import { FilterViewModel } from '../view-models/filter.view-model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {
  public colour!: string;
  @Input() filter!: FilterViewModel;

  public ngOnInit(): void {
    this.colour = ColourService.HEXtoRGB(this.filter.colour);
  }
}
