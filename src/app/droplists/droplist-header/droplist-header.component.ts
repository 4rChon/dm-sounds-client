import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import Droplist from '../droplist.interface';
import { DroplistService } from '../droplist.service';

@Component({
  selector: 'app-droplist-header',
  templateUrl: './droplist-header.component.html',
  styleUrls: ['./droplist-header.component.less']
})
export class DroplistHeaderComponent implements OnInit {
  @Input() index!: number;
  @Input() editing = false;

  public name = new FormControl('');

  private droplist!: Droplist;

  constructor(private readonly droplistService: DroplistService) { }

  ngOnInit(): void {
    this.droplist = this.droplistService.getDroplist(this.index);
    this.name.setValue(this.droplist.name);
  }

  public onSubmit(): void {
    this.editing = false;
    this.droplist.name = this.name.value;
  }

  public onEdit(): void {
    this.editing = true;
  }

  public onDelete(): void {
    this.droplistService.removeDroplist(this.index);
  }
}
